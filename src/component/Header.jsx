import React, { Component } from 'react';
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
      </header>
    );
  }
}

export default Header;
