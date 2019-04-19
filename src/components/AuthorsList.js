import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Div from 'styled-kit/Div'

import Author from './Author'

const AuthorsList = ({ authors, ...props }) => (
  <Div wraps justifyAround {...props}>
    {authors.map(author => (
      <Author key={author.node.id} author={author.node} css="padding: 24px;" />
    ))}
  </Div>
)

const query = graphql`
  query {
    allAuthorsJson {
      edges {
        node {
          ...AuthorFragment
        }
      }
    }
  }
`

export default props => (
  <StaticQuery query={query} render={data => <AuthorsList authors={data.allAuthorsJson.edges} {...props} />} />
)
