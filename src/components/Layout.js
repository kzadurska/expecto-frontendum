import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Div from 'styled-kit/Div'

import GlobalStyle from 'styles/GlobalStyle'

const HomeLink = styled(Link)`
  flex: none;
  display: block;
  padding: 32px 16px;
  font: 35px/0.6 Cinzel, serif;
  text-decoration: none;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px;
  width: 100%;
  max-width: 1024px;
  overflow: auto;
`

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

const Layout = ({ title, children }) => (
  <Div column>
    <GlobalStyle />
    <HomeLink to="/">{title}</HomeLink>
    <Main>{children}</Main>
  </Div>
)

Layout.propTypes = propTypes

export default Layout
