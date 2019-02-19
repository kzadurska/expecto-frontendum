import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import GlobalStyle from './GlobalStyle'

const Wrapper = styled.div`
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 24px;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const HeadingElement = location.pathname === rootPath ? 'h1' : 'h3'

  return (
    <Wrapper>
      <GlobalStyle />
      <header>
        <HeadingElement>
          <Link to="/">{title}</Link>
        </HeadingElement>
      </header>
      <main>{children}</main>
    </Wrapper>
  )
}

export default Layout
