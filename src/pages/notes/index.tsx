import React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import { NavBar } from '../../components/NavBar';
import { PageHead } from '../../components/PageHead';
import { Tag } from '../../components/Tag';

type DataProps = {
  allMarkdownRemark: {
    nodes: {
      parent: {
        name: string;
      };
      frontmatter: {
        title: string;
        date: string;
        tags: string[];
      };
    }[];
    totalCount: number;
  };
};

export default function NotesPage({ data }: PageProps<DataProps>) {
  const { nodes, totalCount } = data.allMarkdownRemark;

  return (
    <>
      <PageHead title="Kai's Notes" />
      <NavBar />
      <main className='mt-8 p-2 max-w-4xl mx-auto flex flex-col items-start'>
        <h1 className='text-3xl font-thin'>Kai's Notes</h1>
        <span className='font-thin mb-4'>total: {totalCount}</span>

        {nodes.map(({ parent, frontmatter }) => (
          <Link
            className='hover:bg-kaibluelight hover:text-gray-100 px-2 py-1'
            key={parent.name}
            to={`./${parent.name}`}
          >
            <span className='font-mono text-xs mr-2 text-gray-400'>{frontmatter.date}</span>
            <span>{frontmatter.title}</span>
            {frontmatter.tags.map((tag) => (
              <Tag key={tag} className='ml-1 border py-px text-gray-400'>
                {tag}
              </Tag>
            ))}
          </Link>
        ))}
      </main>
    </>
  );
}

export const pageQuery = graphql`
  query AllMarkdownRemark {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        parent {
          ... on File {
            name
          }
        }
        frontmatter {
          title
          date
          tags
        }
        rawMarkdownBody
      }
      totalCount
    }
  }
`;
