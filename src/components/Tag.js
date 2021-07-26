import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { backgroundColorDark, backgroundColorLight, badgeColorDark, badgeColorLight, textColorDark, textColorLight } from '../utils/constants'

const Label = styled.span`
  color: #333;
  font-size: 14px;
`

const Count = styled.span`
  flex: none;
  display: inline-block;
  margin-left: 4px;

  width: 14px;
  height: 14px;
  border-radius: 50%;

  font-size: 10px;
  line-height: 14px;
  text-align: center;

  /* ---------- light mode dark mode ---------- */

  @media (prefers-color-scheme: dark) {
    /* Dark theme styles go here */
    background-color: ${backgroundColorDark};

    color: ${textColorDark};
  }

  @media (prefers-color-scheme: light) {
    /* Light theme styles go here */
    background-color: ${backgroundColorLight};

    color: ${textColorLight};
  }
`

const Wrapper = styled(Link)`
  display: inline-flex;
  align-items: center;

  padding: 2px 10px;

  border-radius: 6px;

  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(0, 88, 130, .3);

    ${Label} {
      text-decoration: underline;
    }
  }

  /* ---------- light mode dark mode ---------- */

  @media (prefers-color-scheme: dark) {
    /* Dark theme styles go here */
    background: ${badgeColorDark};
  }

  @media (prefers-color-scheme: light) {
    /* Light theme styles go here */
    background: ${badgeColorLight};
  }
`

const Tag = ({ count, children, ...props }) => (
  <Wrapper {...props}>
    <Label>{children}</Label>
    {count && <Count>{count}</Count>}
  </Wrapper>
)

export default Tag
