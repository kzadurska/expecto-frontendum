const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const toKebabCase = require('./src/utils/toKebabCase')

const blogPostPageTemplate = path.resolve('./src/templates/blog-post.js')
const tagPageTemplate = path.resolve('./src/templates/tags.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        posts: edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
        tags: group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors

    const { posts, tags } = result.data.allMarkdownRemark

    // Create blog posts pages
    posts.forEach((post, index) => {
      createPage({
        path: post.node.fields.slug,
        component: blogPostPageTemplate,
        context: {
          slug: post.node.fields.slug,
          previous: index === posts.length - 1 ? null : posts[index + 1].node,
          next: index === 0 ? null : posts[index - 1].node,
        },
      })
    })

    // Create post tags pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${toKebabCase(tag.fieldValue)}/`,
        component: tagPageTemplate,
        context: { tag: tag.fieldValue },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    actions.createNodeField({
      name: 'slug',
      node,
      value: createFilePath({ node, getNode }),
    })
  }
}
