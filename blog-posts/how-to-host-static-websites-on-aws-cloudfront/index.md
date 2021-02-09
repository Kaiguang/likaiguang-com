---
title: How to Host Static Websites on AWS CloudFront
date: 2021-02-08
tags:
  - AWS
---

Serving your contents through a global CDN can have its benefits, such as delivering contents faster to your global audience. On AWS, we can use CloudFront as a CDN in front of an S3 bucket for serving static contents.

I learned there are actually two different kinds of S3 endpoints as origins to be used in CloudFront for hosting static websites:

- S3 API endpoint _(This article will only talk about this type of endpoint)_
- S3 Website endpoint

_Limitation: **The S3 API endpoint** method **will NOT** work with a **Gatsby** site because it will not perform server side redirects (301/302). More details can be found in this [Gatsby article](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-s3-cloudfront/#setting-up-cloudfront)._

_Note: **The S3 Website endpoint** was covered in my [previous blog](https://likaiguang.com/blog/how-to-host-static-gatsby-website-on-aws), but it's missing the part that restricts access to the S3 buckets with a specific Referrer header. Refer to this [YouTube video](https://www.youtube.com/watch?v=DiIaoIcoKNY) for a better explanation (and better practice) from the AWS team._

I personally prefer the **S3 API endpoint** way because it only allows CloudFront to access, thus removing the public access from the S3 buckets. However this approach doesn't work well with Gatsby.

I'll use this website likaiguang.com as an example for the below steps.

I'm skipping the details on how to use Route 53 as I'm already pretty good with it as of today (or at least good at googling how to use Route 53 and understanding different types of DNS records). More details can be found at [the same previous blog](https://likaiguang.com/blog/how-to-host-static-gatsby-website-on-aws) for Route 53 and S3 uploads.

## 1. S3

Create a bucket for static website files, nothing special needs to be done.

## 2. Certificate Manager

Make sure the region for the AWS Certificate Manager is selected under **US East (N. Virginia) us-east-1**, as later in the CloudFront it will only show certificates under this region.

Validation by CNAME is straight forward with Route 53.

## 3. CloudFront

Create distribution:

- Origin Domain Name should be selected from the dropdown S3 API endpoint
- Restrict Bucket Access: Yes
- Origin Access Identity: Create a New Identity
- Grant Read Permission on Bucket: Yes, Update Bucket Policy
- Viewer Protocol Policy: Redirect HTTP to HTTPS
- Alternate Domain Names (CNAMESs): likaiguang.com and www.likaiguang.com
- SSL Certificate: Custom SSL Certificate with dropdown from the Certificate Manager
- Default Root Object: index.html (usually)

## 4. Route 53

Once the CloudFront distribution is processed, update the DNS records with A record and CNAME as needed. After the DNS records propagate, the websites should be online with HTTPS.
