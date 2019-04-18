const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const toKebabCase = require('./src/utils/toKebabCase')

const blogPostPageTemplate = path.resolve('./src/templates/blog-post.js')
const tagPageTemplate = path.resolve('./src/templates/tags.js')
const authorPageTemplate = path.resolve('./src/templates/authorPageTemplate.js')

const query = `{
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
  allAuthorsJson {
    authors: edges {
      node {
        id
        name
        bio
        avatar {
          publicURL
        }
        twitter
      }
    }
  }
}`

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(query).then(result => {
    if (result.errors) throw result.errors

    const { posts, tags } = result.data.allMarkdownRemark
    const { authors } = result.data.allAuthorsJson

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

    // Create author pages
    authors.forEach(author => {
      createPage({
        path: `/authors/${author.node.id}/`,
        component: authorPageTemplate,
        context: { author: author.node },
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
