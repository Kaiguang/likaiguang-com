import React from 'react';
import { graphql, PageProps } from 'gatsby';
import '../../css/github-markdown-light.css';
import { NavBar } from '../../components/NavBar';
import { PageHead } from '../../components/PageHead';
import { Tag } from '../../components/Tag';
import { ArrowLeftIcon } from '../../components/ArrowLeftIcon';

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

export default function NotePage({ data, navigate }: PageProps<DataType>) {
  const { markdownRemark } = data;
  const { frontmatter, html, rawMarkdownBody } = markdownRemark;

  function goBack() {
    if (window.history.state === null) {
      navigate('/notes');
    } else {
      window.history.back();
    }
  }

  return (
    <>
      <PageHead title={`Kai | ${frontmatter.title}`} />
      <NavBar />
      <article className='markdown-body'>
        <div className='flex items-center'>
          <button
            className='mr-1 hover:fill-gray-100 hover:bg-kaibluelight px-2 py-1  border-0 rounded-md'
            onClick={() => {
              goBack();
            }}
          >
            <ArrowLeftIcon className='h-6' />
          </button>

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
