import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../component/Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      loading: false,
      logged: false,
    };
  }

  handleChange = (event) => {
    this.setState({ inputName: event.target.value });
  }

  /** Ref: Consultei o repositório do Glauco sobre a função Logged */
  Logged = () => {
    const { inputName } = this.state;
    this.setState({ loading: true });
    createUser({ name: inputName })
      .then(() => this.setState({
        loading: false,
        logged: true,
      }));
  }

  render() {
    const minNameLength = 3;
    const { inputName, logged, loading } = this.state;
    if (logged) {
      return <Redirect to="/search" />;
    }
    return (
      <div data-testid="page-login">
        {loading ? (<Loading />)
          : (
            <>
              <label htmlFor="login-name-input">
                Nome:
                <input
                  placeholder="Usuário"
                  type="text"
                  data-testid="login-name-input"
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="submit"
                data-testid="login-submit-button"
                disabled={ inputName.length < minNameLength }
                onClick={ this.Logged }
              >
                Entrar
              </button>
            </>
          )}
      </div>
    );
  }
}

export default Login;
