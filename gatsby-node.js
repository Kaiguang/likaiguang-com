const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: `blog-posts`,
      trailingSlash: false,
    });

    createNodeField({ node, name: `slug`, value: relativeFilePath });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  const { createPage } = actions;

  data.allMarkdownRemark.nodes.forEach(({ fields }) => {
    createPage({
      path: `blog${fields.slug}`,
      component: path.resolve("./src/templates/BlogPost.js"),
      context: {
        slug: fields.slug,
      },
    });
  });
};
