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
  children: PropTypes.node,
}

const Post = ({ post, ...props }) => (
  <Div column {...props}>
    <h2 css="text-align: center; margin: 0;">
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h2>

    <small css="text-align: center;">{post.frontmatter.date}</small>

    <p dangerouslySetInnerHTML={{ __html: post.frontmatter.summary }} />
  </Div>
)

Post.propTypes = propTypes

export default Post
