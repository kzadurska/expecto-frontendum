import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Div from 'styled-kit/Div'

const propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string,
    }),
  }),
}

export default function Post({ post, ...props }) {
  return (
    <Div column {...props}>
      <h2 css="margin: 0;">
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h2>

      <small>{post.frontmatter.date}</small>

      <p dangerouslySetInnerHTML={{ __html: post.frontmatter.summary }} />
    </Div>
  )
}

Post.propTypes = propTypes
