import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends React.Component {
  render() {
    const { album: { artistName, collectionId,
      collectionName, artworkUrl100 } } = this.props;
    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <img
          src={ artworkUrl100 }
          alt={ collectionName }
        />
        <h4>{collectionName}</h4>
        <p>{artistName}</p>
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  album: PropTypes.objectOf({
    collectionId: PropTypes.number,
    artworkUrl100: PropTypes.string,
    collectionName: PropTypes.string,
    artistName: PropTypes.string,
  }).isRequired,
};

export default AlbumCard;
