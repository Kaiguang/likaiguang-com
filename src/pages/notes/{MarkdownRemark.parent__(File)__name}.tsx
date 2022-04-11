import React from 'react';
import { graphql, PageProps } from 'gatsby';
import '../../css/github-markdown-light.css';
import { NavBar } from '../../components/NavBar';
import { PageHead } from '../../components/PageHead';
import { Tag } from '../../components/Tag';

type DataType = {
  markdownRemark: {
    frontmatter: {
      title: string;
      date: string;
      tags: string[];
    };
    html: string;
    rawMarkdownBody: string;
  };
};

export default function NotePage({ data }: PageProps<DataType>) {
  const { markdownRemark } = data;
  const { frontmatter, html, rawMarkdownBody } = markdownRemark;

  return (
    <>
      <PageHead title={`Kai | ${frontmatter.title}`} />
      <NavBar />
      <article className='markdown-body'>
        <div className='flex items-center'>
          {frontmatter.tags.map((tag) => (
            <Tag key={tag} className='mr-1 border py-px text-gray-400'>
              {tag}
            </Tag>
          ))}
          <Tag className='py-px border text-gray-400'>length: {rawMarkdownBody.length}</Tag>
        </div>

        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query MarkdownRemark($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
        tags
      }
      html
      rawMarkdownBody
    }
  }
`;
