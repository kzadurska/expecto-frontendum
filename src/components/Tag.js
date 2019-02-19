import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Label = styled.span`
  color: #333;
  font-size: 14px;
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
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`

const Wrapper = styled(Link)`
  display: inline-flex;
  align-items: center;

  padding: 6px 12px;

  background: #e0e0e0;
  border-radius: 16px;

  text-decoration: none;
  cursor: pointer;

  &:hover ${Label} {
    text-decoration: underline;
  }
`

const Tag = ({ count, children, ...props }) => (
  <Wrapper {...props}>
    <Label>{children}</Label>
    {count && <Count>{count}</Count>}
  </Wrapper>
)

export default Tag
