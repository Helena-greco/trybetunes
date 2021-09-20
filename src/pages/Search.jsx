import React from 'react';
import Header from '../component/Header';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
    };
  }

  handleSearch = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    const { search } = this.state;
    const minArtistName = 2;
    return (
      <div data-testid="page-search">
        <Header />
        <form onSubmit={ this.handleSubmit }>
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
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
