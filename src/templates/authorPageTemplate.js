import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Author from '../components/Author'
import PostsList from '../components/PostsList'

const propTypes = {
  pageContext: PropTypes.shape({
    author: PropTypes.shape({}).isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              author: PropTypes.shape({
                id: PropTypes.string.isRequired,
              }).isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default function AuthorPageTemplate({ pageContext, data, location }) {
  const { author } = pageContext
  const { title } = data.site.siteMetadata
  const { posts } = data.allMarkdownRemark

  // TODO: I'm fetching all posts and then filtering them by ID here
  // I'd rather filteri them in GraphQL, but don't know how to do this
  // Tried something like this, but it doesn't work: `filter: { frontmatter: { author: { id: { eq: "kasia-zadurska" } } } }`
  // https://www.gatsbyjs.org/docs/graphql-reference/#filter
  const userPosts = posts.filter(post => post.node.frontmatter.author.id === author.id)

  return (
    <Layout location={location} title={title}>
      <SEO title={author.name} keywords={['blog', 'gatsby', 'javascript', 'react']} />

      <Author author={author} />

      <PostsList posts={userPosts} />
    </Layout>
  )
}

AuthorPageTemplate.propTypes = propTypes

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      posts: edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            summary
            author {
              id
            }
          }
        }
      }
    }
  }
`
