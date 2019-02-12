import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

const Wrapper = styled.div`
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 24px;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <Wrapper>
      <header>{header}</header>
      <main>{children}</main>
    </Wrapper>
  )
}

export default Layout
