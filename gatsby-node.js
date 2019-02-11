const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const blogPostTemplate = path.resolve('./src/templates/blog-post.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors

    // Create blog posts pages
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      createPage({
        path: post.node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.fields.slug,
          previous: index === posts.length - 1 ? null : posts[index + 1].node,
          next: index === 0 ? null : posts[index - 1].node,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      name: 'slug',
      node,
      value: createFilePath({ node, getNode }),
    })
  }
}
