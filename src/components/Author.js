import React from 'react'
import { graphql } from 'gatsby'
import Div from 'styled-kit/Div'

import Avatar from './Avatar'

import twitterLogo from '../../content/assets/twitter-logo.svg'

const Author = ({ author, ...props }) => (
  <Div column itemsCenter listTop={16} {...props}>
    <Avatar src={author.avatar.publicURL} alt={author.name} />

    <Div column listTop={4} itemsCenter>
      <span>
        Written by <strong>{author.name}</strong>
      </span>

      <span>{author.bio}</span>

      <a href={`https://twitter.com/${author.twitter}`} css="display: block;">
        <img src={twitterLogo} alt="Twitter logo" width="40" />
      </a>
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
