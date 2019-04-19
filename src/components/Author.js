import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Div from 'styled-kit/Div'

import Avatar from './Avatar'

import twitterLogo from '../../content/assets/twitter-logo.svg'
import codepenLogo from '../../content/assets/codepen-logo.svg'
import githubLogo from '../../content/assets/github-logo.svg'

const logos = {
  twitter: <img src={twitterLogo} alt="Twitter logo" width="24" />,
  codepen: <img src={codepenLogo} alt="Codepen logo" width="24" />,
  github: <img src={githubLogo} alt="GitHub logo" width="24" />,
}

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.shape({
    publicURL: PropTypes.bool.isRequired,
  }),
  twitter: PropTypes.string,
  codepen: PropTypes.string,
  github: PropTypes.string,
}

export default function Author({ author, ...props }) {
  return (
    <Div flex="1 1 320px;" column listTop={24} maxWidth={320} {...props}>
      <Div itemsCenter>
        <Avatar src={author.avatar.publicURL} alt={author.name} />
        <h4 css="margin: 0 0 0 16px;">{author.name}</h4>
      </Div>

      <span>{author.bio}</span>

      <Div listLeft itemsCenter mLeft={12}>
        {Object.keys(author.links)
          .filter(link => author.links[link])
          .map(link => (
            <a key={link} href={author.links[link]} target="_blank">
              {logos[link]}
            </a>
          ))}
      </Div>
    </Div>
  )
}

Author.propTypes = propTypes

export const query = graphql`
  fragment AuthorFragment on AuthorsJson {
    id
    name
    bio
    avatar {
      publicURL
    }
    links {
      twitter
      codepen
      github
    }
  }
`
