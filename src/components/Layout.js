import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Div from 'styled-kit/Div'

import GlobalStyle from './GlobalStyle'

const HomeLink = styled(Link)`
  flex: none;

  display: block;
  padding: 32px 16px;

  font: 35px/0.6 Cinzel, serif;
  text-align: center;
  text-decoration: none;
`

const Layout = ({ title, children }) => (
  <Div column css="min-height: 100vh;">
    <GlobalStyle />

    <HomeLink to="/">{title}</HomeLink>

    <Div as="main" column pBottom={24} flex={1} maxWidth={630} padding="0 16px" margin="0 auto">
      {children}
    </Div>
  </Div>
)

export default Layout
