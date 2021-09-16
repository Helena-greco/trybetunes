import React from 'react';

class Login extends React.Component {
  // construct() {
  //   super()
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div data-testid="page-login">
        <label htmlFor="login-name-input">
          Nome Completo:
          <input
            type="text"
            data-testid="login-name-input"
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
