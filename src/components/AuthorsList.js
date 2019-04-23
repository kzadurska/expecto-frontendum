import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Div from 'styled-kit/Div'

import Author from 'components/Author'

function AuthorsList({ authors, ...props }) {
  return (
    <Div column listTop={40} justifyCenter {...props}>
      {authors.map(author => (
        <Author key={author.node.id} author={author.node} maxWidth={320} />
      ))}
    </Div>
  )
}

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
