import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

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
  <div {...props}>
    <h3>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h3>

    <small>{post.frontmatter.date}</small>

    <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
  </div>
)

PostExcerpt.propTypes = propTypes

export default PostExcerpt
