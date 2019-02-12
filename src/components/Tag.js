import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Label = styled.span`
  color: #333;
  font: 14px sans-serif;
`

const Count = styled.span`
  flex: none;
  display: inline-block;
  margin-left: 4px;

  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;

  color: #333;
  font: 10px/12px sans-serif;
  text-align: center;
`

const Wrapper = styled(Link)`
  display: inline-flex;
  align-items: center;

  padding: 6px 12px;

  background: #e0e0e0;
  border-radius: 16px;

  cursor: pointer;

  &:hover ${Label} {
    text-decoration: underline;
  }

  /* // TODO: that can probably be removed once we clean-up the typography */
  box-shadow: none;
`

const Tag = ({ count, children, ...props }) => (
  <Wrapper {...props}>
    <Label>{children}</Label>
    {count && <Count>{count}</Count>}
  </Wrapper>
)

export default Tag
