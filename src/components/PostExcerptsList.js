import React from 'react'
import Div from 'styled-kit/Div'

import PostExcerpt from './PostExcerpt'

const PostExcerptsList = ({ posts, ...props }) => (
  <Div column listTop={64} {...props}>
    {posts.map(post => (
      <PostExcerpt key={post.node.fields.slug} post={post.node} />
    ))}
  </Div>
)

export default PostExcerptsList
