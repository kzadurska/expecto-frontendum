import React from 'react'
import { Link, graphql } from 'gatsby'
import Div from 'styled-kit/Div'

import { mainColor } from 'utils/constants'

import Author from 'components/Author'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const BlogPostPageTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.summary} />

      <h2
        css={`
          margin: 32px 0 0;
          color: ${mainColor};
        `}
      >
        {post.frontmatter.title}
      </h2>

      <small>{post.frontmatter.date}</small>

      <p>{post.frontmatter.summary}</p>

      <div css="margin-top: 40px;" dangerouslySetInnerHTML={{ __html: post.html }} />

      {(previous || next) && (
        <Div wraps mTop={80} css="font-size: 14px;">
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
      )}

      <Author css="margin-top: 80px;" author={post.frontmatter.author} />
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
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        summary
        author {
          ...AuthorFragment
        }
      }
    }
  }
`
