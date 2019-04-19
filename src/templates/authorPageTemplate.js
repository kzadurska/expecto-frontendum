import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Author from '../components/Author'
import PostsList from '../components/PostsList'

const propTypes = {
  pageContext: PropTypes.shape({
    author: PropTypes.string.isRequired,
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

export default function AuthorPageTemplate({ data, location }) {
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO title={data.authorsJson.name} keywords={['blog', 'gatsby', 'javascript', 'react']} />
      <Author author={data.authorsJson} mTop={32} />
      <PostsList posts={data.allMarkdownRemark.posts} mTop={40} />
    </Layout>
  )
}

AuthorPageTemplate.propTypes = propTypes

export const pageQuery = graphql`
  query($author: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { author: { id: { eq: $author } } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
              ...AuthorFragment
            }
          }
        }
      }
    }
    authorsJson(id: { eq: $author }) {
      ...AuthorFragment
    }
  }
`
