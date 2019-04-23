import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Div from 'styled-kit/Div'

import twitterLogo from 'content/assets/twitter-logo.svg'
import codepenLogo from 'content/assets/codepen-logo.svg'
import githubLogo from 'content/assets/github-logo.svg'

import Avatar from 'components/Avatar'

const logos = {
  twitter: <img src={twitterLogo} alt="Twitter logo" width="24" />,
  codepen: <img src={codepenLogo} alt="Codepen logo" width="24" />,
  github: <img src={githubLogo} alt="GitHub logo" width="24" />,
}

const propTypes = {
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    avatar: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }),
    links: PropTypes.shape({
      twitter: PropTypes.string,
      codepen: PropTypes.string,
      github: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default function Author({ author, ...props }) {
  return (
    <Div column listTop={24} {...props}>
      <Link to={`/authors/${author.id}`}>
        <Div itemsCenter>
          <Avatar src={author.avatar.publicURL} alt={author.name} />
          <h4 css="margin: 0 0 0 16px;">{author.name}</h4>
        </Div>
      </Link>

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
