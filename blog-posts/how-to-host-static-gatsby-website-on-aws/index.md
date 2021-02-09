---
title: How to Host Static Gatsby Website on AWS
date: 2021-02-09
originalDate: 2019-08-22
tags:
  - AWS
  - Gatsby
---

This blog was built using Gatsby and its starter library _gatsby-starter-blog_. It was hosted on AWS using the following services.

- Route 53
- Certificate Manager
- S3
- CloudFront

## 1. Route 53

I bought likaiguang.com. Created a hosted zone, hosted zone is a container for records (A, CNAME) about how to route traffic for a domain.

## 2. Certificate Manager

I first made sure the region selected was **US East (N. Virginia) us-east-1**, because later in CloudFront it would only show certificates in this region in the drop-down menu. Then I requested a SSL/TLS public certificate with the following domain names.

- likaiguang.com
- www.likaiguang.com

Validation was done by the CNAME method, AWS added some convenience by automatically adding the DNS records.

## 3. S3

I created an S3 bucket named likaiguang.com using a region near me: _US West (Oregon) us-west-2_.

### S3 Bucket: likaiguang.com

#### Under Tab: Properties

I enabled bucket for static website hosting, selected _Use this bucket to host a website_ and put _index.html_ as index document, _404.html_ as error document.

#### Under Tab: Permissions

This was the bucket for storing my website, so I set the _Block public access_ by turning off the four options below.

![Block All Public Access](./block-all-public-access.png)

I set the _Bucket Policy_ per below.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "LikaiguangPublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::likaiguang.com/*"]
    }
  ]
}
```

#### Upload Website from Gatsby Blog Repo

I installed AWS CLI on my local machine, created a IAM user and give it access to my S3 buckets. Ran `aws configure` to give it both _Key ID_ and _Access Key_ for the IAM user.

I installed Gatsby plugin `npm i gatsby-plugin-s3`. This enabled me to deploy the website to my S3 bucket in my Gatsby blog repo.

I added following configurations in the _gatsby-config.js_ file.

```js
{
  resolve: `gatsby-plugin-s3`,
  options: {
    bucketName: `likaiguang.com`,
    acl: null,
    protocol: `https`,
    hostname: `likaiguang.com`,
  },
},
```

I added script `"deploy": "npm run build && gatsby-plugin-s3 deploy",` in the _package.json_ file.

Ran `npm run deploy` to build and upload my website to the S3 bucket.

## 4. CloudFront

In the distribution creation, I set the _Origin Domain Name_ to the S3 Website endpoint _likaiguang.com.s3-website-us-west-2.amazonaws.com_, not the S3 API endpoint _likaiguang.com.s3.amazonaws.com_ from the drop-down.

Changed _Viewer Protocol Policy_ to _Redirect HTTP to HTTPS_.

Under _Alternate Domain Names (CNAMEs)_ I added the two domain names.

- likaiguang.com
- www.likaiguang.com

Under _SSL Certificate_ I selected _Custom SSL Certificate (example.com):_ and chose the certificate in the drop-down I created previously in Certificate Manager.

Left everything else in default.

After creation, I was given a domain name for my distribution _dryg4r2wprzbd.cloudfront.net_.

## 5. Back to Route 53

After the CloudFront distribution was deployed, go back to the Route 53 console.

I added an A record for likaiguang.com pointing to the ALIAS _dryg4r2wprzbd.cloudfront.net_ CloudFront distribution.

I added a CNAME record for www.likaiguang.com pointing to the same CloudFront distribution.

After the DNS propagate, my website should be online with https shortly.

## 6. Extra Credit: Restrict S3 Bucket Access Policy to a Specific HTTP Referer Header

Note: **Referer** is a misspelling of "Referrer", details can be found on this [Wikipedia page](https://en.wikipedia.org/wiki/HTTP_referer).

Update the CloudFront distribution Origin Custom Headers with a custom Referer header:

- Header Name: Referer
- Value: likaiguang.com

Then update the S3 Bucket Policy to restrict access to this header with the following condition added.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "LikaiguangPublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::likaiguang.com/*"],
      "Condition": {
        "StringLike": {
          "aws:Referer": ["likaiguang.com"]
        }
      }
    }
  ]
}
```

Test the website to make sure everything works.
