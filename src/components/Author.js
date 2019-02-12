import React from 'react'
import { graphql } from 'gatsby'
import Div from 'styled-kit/Div'

import Avatar from './Avatar'

const Author = ({ author, ...props }) => (
  <Div itemsStart listLeft={16} {...props}>
    <Avatar src={author.avatar.publicURL} alt={author.name} />

    <Div column listTop={4} itemsStart>
      <span>
        Written by <strong>{author.name}</strong>
      </span>

      <span>{author.bio}</span>

      <a href={`https://twitter.com/${author.twitter}`}>Follow {author.name.split(' ')[0]} on Twitter</a>
    </Div>
  </Div>
)

export const query = graphql`
  fragment AuthorFragment on AuthorsJson {
    id
    name
    bio
    avatar {
      publicURL
    }
    twitter
  }
`

export default Author
