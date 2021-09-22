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

  // Ajuda do Riba sobre passar o parâmetro Data
  favoriteSongs = async ({ target }) => {
    const { data } = this.props;
    this.setState({ loading: true });
    if (target.checked) {
      await addSong(data);
      this.setState({
        loading: false,
        checked: true,
      });
    }
  }

  render() {
    const { data: { previewUrl, trackName, trackId } } = this.props;

    const { loading, checked } = this.state;
    const musics = (
      <div>
        <h4>{ trackName }</h4>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor={ trackId } data-testid={ `checkbox-music-${trackId}` }>
          { loading ? <Loading /> : 'Favorita' }
          <input
            type="checkbox"
            id={ trackId }
            onChange={ this.favoriteSongs }
            checked={ checked }
          />
        </label>
      </div>
    );

    // Ajuda no código da Luana no slack
    return (
      <div>
        { !loading ? musics : <Loading /> }
      </div>
    );
  }
}

MusicCard.propTypes = {
  data: PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
    trackId: PropTypes.number,
  }).isRequired,
};

export default MusicCard;
