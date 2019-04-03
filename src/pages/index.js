import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostExcerptsList from '../components/PostExcerptsList'
import TagsList from '../components/TagsList'
import AuthorsList from '../components/AuthorsList'

const BlogIndex = ({ data, location }) => {
  const { title } = data.site.siteMetadata
  const { edges } = data.allMarkdownRemark

  return (
    <Layout location={location} title={title}>
      <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />

      <PostExcerptsList posts={edges} mTop={32} />

      <TagsList mTop={64} />

      <AuthorsList mTop={64} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
