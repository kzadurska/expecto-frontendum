import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostExcerpt from '../components/PostExcerpt'
import TagsList from '../components/TagsList'
import AuthorsList from '../components/AuthorsList'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />

      {posts.map(post => (
        <PostExcerpt key={post.node.fields.slug} post={post.node} />
      ))}

      <TagsList mTop={40} />

      <AuthorsList mTop={40} />
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
