import React from 'react';
import Author from './Author';

export interface Props {
  author: Author;
};

export default function Author({author}: Props) {
    const { name, handle } = author;
    return (
      <span className="author">
        <span className="name">{name}</span>
        <span className="handle">@{handle}</span>
      </span>
    );
}

Author.defaultProps = {
    author: {
        name: 'Some User',
        handle: 'somehandle'
    }
}

Author.propTypes = {
    author: PropTypes.exact({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
      })
}