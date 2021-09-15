import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import NotFound from './components/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes in progress</p>
        <Route path="/" component={ Login } />
        <Route path="/search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="*" component={ NotFound } />
      </BrowserRouter>
    );
  }
}

export default App;
