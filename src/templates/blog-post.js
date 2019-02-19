import React from 'react'
import { Link, graphql } from 'gatsby'
import Div from 'styled-kit/Div'

import Author, { AuthorFragment } from '../components/Author'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const BlogPostPageTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />

      <h1>{post.frontmatter.title}</h1>

      <p>{post.frontmatter.date}</p>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <hr />

      <Author author={post.frontmatter.author} />

      <Div wraps mTop={40}>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}

        {next && (
          <Link to={next.fields.slug} rel="next" style={{ marginLeft: 'auto' }}>
            {next.frontmatter.title} →
          </Link>
        )}
      </Div>
    </Layout>
  )
}

export default BlogPostPageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author {
          ...AuthorFragment
        }
      }
    }
  }
`
