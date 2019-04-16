import React from 'react'
import Div from 'styled-kit/Div'

import Post from './Post'

const PostsList = ({ posts, ...props }) => (
  <Div column listTop={32} {...props}>
    {posts.map(post => (
      <Post key={post.node.fields.slug} post={post.node} />
    ))}
  </Div>
)

export default PostsList
