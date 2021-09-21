import React from 'react';
import Header from '../component/Header';
import Loading from '../component/Loading';
import AlbumCard from '../component/AlbumCard';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      loading: false,
      searchResult: false,
      fecthArtist: [],
      lastArtist: '',
    };
  }

  handleSearch = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    this.setState({
      loading: true,
    });
    const { search } = this.state;
    const searchAlbuns = await searchAlbumsAPI(search);
    this.setState({
      search: '',
      loading: false,
      searchResult: true,
      fecthArtist: searchAlbuns,
      lastArtist: search,
    });
  }

  resultSearch = () => {
    const { fecthArtist, lastArtist } = this.state;
    if (fecthArtist.length === 0) {
      return (
        <div>
          <p>{ `Resultado de álbuns de: ${lastArtist}` }</p>
          <h3>Nenhum álbum foi encontrado</h3>
        </div>
      );
    }
    return (
      <div>
        <p>{ `Resultado de álbuns de: ${lastArtist}` }</p>
        <section>
          { fecthArtist.map((album) => (
            <AlbumCard key={ album.collectionId } album={ album } />)) }
        </section>
      </div>
    );
  }

  render() {
    const { search, loading, searchResult } = this.state;
    const minArtistName = 2;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            type="text"
            data-testid="search-artist-input"
            name="search"
            value={ search }
            onChange={ this.handleSearch }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            value="pesquisar"
            disabled={ search.length < minArtistName }
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </form>
        <section>
          { loading ? <Loading /> : ''}
          { searchResult ? this.resultSearch() : ''}
        </section>
      </div>
    );
  }
}

export default Search;
