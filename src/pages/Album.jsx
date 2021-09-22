import React from 'react';
import PropTypes from 'prop-types';
import Header from '../component/Header';
import Loading from '../component/Loading';
import getMusics from '../services/musicsAPI';
import MusicCard from '../component/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchMusic: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.ListOfMusic();
  }

  ListOfMusic = async () => {
    const { match: { params: { id } } } = this.props;
    const musicList = await getMusics(id);
    this.setState({
      fetchMusic: musicList,
      loading: false,
    });
  }

  render() {
    const { fetchMusic, loading } = this.state;
    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <h3 data-testid="artist-name" key={ fetchMusic[0].key }>
            { fetchMusic[0].artistName }
          </h3>
          <h4 data-testid="album-name" key={ fetchMusic[0].key }>
            { fetchMusic[0].collectionName }
          </h4>
          <div>
            { fetchMusic.slice(1).map((music, index) => (<MusicCard
              key={ index }
              data={ music }
              nameArtist={ music.artistName }
              albumName={ music.collectionName }
              image={ music.artworkUrl100 }
              // previewUrl={ music.previewUrl }
              // trackName={ music.trackName }
              // trackId={ music.trackId }
            />)) }
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
