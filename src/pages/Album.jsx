import React from 'react';
import PropTypes from 'prop-types';
import Header from '../component/Header';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      fetchMusic: [],
    };
  }

  handleChange = async () => {
    const { match: { params: { id } } } = this.props;
    const musicList = await getMusics(id);
    this.setState({
      fetchMusic: musicList,
    });
  }

  render() {
    const { fetchMusic } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <section>
          { fetchMusic }
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Album;
