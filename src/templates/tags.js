import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostsList from '../components/PostsList'

const propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

const TagPageTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { title } = data.site.siteMetadata
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <Layout location={location} title={title}>
      <SEO title={`"${tag}" posts`} keywords={['blog', 'gatsby', 'javascript', 'react']} />

      <h4 css="text-align: center; margin: 0 0 16px; height: 16px;">
        {`${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`}
      </h4>

      <PostsList posts={edges} />
    </Layout>
  )
}

TagPageTemplate.propTypes = propTypes

export default TagPageTemplate

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            summary
          }
        }
      }
    }
  }
`
