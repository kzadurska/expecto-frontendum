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

      <h2 css="text-align: center; margin: 32px 0 0; color: #005882;">{post.frontmatter.title}</h2>

      <small css="text-align: center;">{post.frontmatter.date}</small>

      <div css="margin-top: 40px;" dangerouslySetInnerHTML={{ __html: post.html }} />

      <Author css="margin-top: 80px;" author={post.frontmatter.author} />

      <Div wraps mTop="auto" pTop={80} css="font-size: 14px;">
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
