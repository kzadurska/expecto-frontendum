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
    }),
  }),
  children: PropTypes.node,
}

const PostExcerpt = ({ post, ...props }) => (
  <Div column {...props}>
    <h2 css="text-align: center; margin: 0;">
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h2>

    <small css="text-align: center;">{post.frontmatter.date}</small>

    <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
  </Div>
)

PostExcerpt.propTypes = propTypes

export default PostExcerpt
