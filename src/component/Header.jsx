import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import '../App.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      username: '',
    };
  }

  /** Ref: https://github.com/tryber/sd-014-b-project-trybetunes/commit/a310d6e4e8200f5c9bdaed4e91bd1b9683a0077e */
  componentDidMount() {
    const { username } = this.state;
    if (username.length === 0) {
      getUser()
        .then((result) => this.setState({
          username: result.name,
          loading: false,
        }));
    }
  }

  render() {
    const { username, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <header data-testid="header-component">
        <h1 className="header-title">Trybetunes</h1>
        <p data-testid="header-user-name">{ username }</p>
        <nav>
          <Link
            to="/search"
            data-testid="link-to-search"
          >
            Pesquisa
          </Link>
          <Link
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favoritas
          </Link>
          <Link
            to="/profile"
            data-testid="link-to-profile"
          >
            Perfil
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
