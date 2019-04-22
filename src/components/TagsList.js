import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Div from 'styled-kit/Div'

import toKebabCase from '../utils/toKebabCase'
import Orb from './Orb'

import Tag from './Tag'

const propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired
  ),
}

const TagsList = ({ tags, ...props }) => (
  <Div wraps listRight {...props}>
    {tags.map(tag => (
      <Orb key={tag.fieldValue}>
        <Tag to={`/tags/${toKebabCase(tag.fieldValue)}/`} count={tag.totalCount}>
          {tag.fieldValue}
        </Tag>
      </Orb>
    ))}
  </Div>
)

TagsList.propTypes = propTypes

const query = graphql`
  query {
    allMarkdownRemark {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default props => (
  <StaticQuery query={query} render={data => <TagsList tags={data.allMarkdownRemark.tags} {...props} />} />
)
