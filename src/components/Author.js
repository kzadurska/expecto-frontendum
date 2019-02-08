import React from "react"
import { graphql } from 'gatsby'

import { rhythm } from "../utils/typography"

function Author({ author }) {
  return (
    <div style={{ display: `flex`, alignItems: 'flex-start' }}>
      <img
        src={author.avatar.publicURL}
        alt={author.name}
        style={{
          flex: `none`,
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: 50,
          height: 50,
          borderRadius: `50%`,
          objectFit: `cover`
        }}
      />
      <p>
        Written by <strong>{author.name}</strong>
        <br />
        {author.bio}
        <br />
        <a href={`https://twitter.com/${author.twitter}`}>
          Follow {author.name.split(' ')[0]} on Twitter
        </a>
      </p>
    </div>
  )
}

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
