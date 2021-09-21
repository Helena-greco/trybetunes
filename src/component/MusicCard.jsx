import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

// cód. do course
class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      checked: false,
    };
  }

  favoriteSongs = async ({ target }) => {
    this.setState({
      loading: true,
    });
    if (target.checked) {
      await addSong(target.trackId);
      this.setState({
        loading: false,
        checked: true,
      });
    }
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { loading, checked } = this.state;
    return (
      <div>
        <h4>{ trackName }</h4>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor="checkbox-input" data-testid={ `checkbox-music-${trackId}` }>
          { loading ? <Loading /> : 'Favorita'}
          <input
            type="checkbox"
            id={ trackId }
            onChange={ this.favoriteSongs }
            checked={ checked }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
};

export default MusicCard;
