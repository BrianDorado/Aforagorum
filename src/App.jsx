import React, { Component } from 'react';
import OtherUserProfile from './components/profileView/profileView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';
import Feedback from './components/askAQuestion/askAQuestion';
import CreatePost from './components/createPost/createPost';
import Profile from './components/profilePage/profilePage';
import HomePage from './components/homePage/homePage';
import Header from './components/header/header';
import Forum from './components/Forum/forum';
import About from './components/about/about';
import Search from './components/search/search ';
import ViewPost from './components/viewPost/viewPost';
import UserFriends from './components/friends/friends';
import { MuiThemeProvider } from 'material-ui/styles';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="router">
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/profile/user/:id" component={Profile} />
                <Route exact path="/forum" component={Forum} />
                <Route path="/forum/create/:id" component={CreatePost} />
                <Route path="/forum/post/:id" component={ViewPost} />
                <Route path="/feedback" component={Feedback} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
