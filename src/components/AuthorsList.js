import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Div from 'styled-kit/Div'

import Author, { AuthorFragment } from './Author'

const AuthorsList = ({ authors, ...props }) => (
  <Div wraps listRight={32} listBottom={24} {...props}>
    {authors.map(author => (
      <Author key={author.node.id} author={author.node} />
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
