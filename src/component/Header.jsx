import React from 'react';
// import Loading from './Loading';
// import { getUser } from '../services/userAPI';

class Header extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     loading: true,
  //     inputName: {},
  //   };

  //   this.loadingName = this.loadingName.bind(this);
  // }

  // componentDidMount = () => {
  //   this.loadingName();
  // }

  // async loadingName() {
  //   this.setState({ loading: true });
  //   const username = await getUser();
  //   console.log(username);
  //   this.setState({
  //     inputName: username.name,
  //     loading: false,
  //   });
  // }

  render() {
    // const { inputName: { name }, loading } = this.state;
    // console.log(this.state);
    return (
      <header data-testid="header-component">
        <h1>TrybeTunes</h1>
        {/* <span data-testid="header-user-name">
          { loading ? (<Loading />) : name }
        </span> */}
      </header>
    );
  }
}

export default Header;
