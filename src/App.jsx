import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Header from './components/header/header'
import LandingPage from './components/landingPage/landingPage';
import HomePage from './components/homePage/homePage';
import Forum from './components/Forum/forum';
import Profile from './components/profilePage/profilePage'
import About from './components/about/about';
import Search from './components/search/search ';
import OtherUserProfile from './components/profileView/profileView';  
import ViewPost from './components/viewPost/viewPost';  
import CreatePost from './components/createPost/createPost';
import UserFriends from './components/friends/friends';  
import { MuiThemeProvider } from 'material-ui/styles';




class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <HashRouter>
      <div className="App">
       <Header/>
          <div className="router">
            <Route exact path='/' component={LandingPage} />
            <Route exact path ='/forum' component={Forum}/>
            <Route path='/home' component={HomePage} />
            <Route path='/about' component={About}/>
            <Route path='/search' component={Search}/>
            <Route path ='/profile/user/:id' component={Profile} />
            <Route path = '/user/profile/:id' component={OtherUserProfile}/> 
            <Route path = '/forum/post/:id' component={ViewPost}/> 
            <Route path = '/forum/create' component={CreatePost}/> 
            <Route path = '/profile/user/friends/:id' component={UserFriends}/> 
            </div>
        </div>
       </HashRouter> 
        </MuiThemeProvider>
    );
  }
}


export default App;


