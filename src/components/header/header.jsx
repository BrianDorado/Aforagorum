import React, { Component } from 'react';
import CompassRose from './../../img/compass_rose_by_draconicparagon-d6rjgqi.png';
import { getUser } from './../../ducks/users';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () =>
    this.setState({
      open: !this.state.open
    });

  closeMenu() {
    this.setState({
      isOpen: false
    });
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div className="header-container">
        <div className="header">
          <section className="app-name">
            <h1>AforaGorum</h1>
          </section>
          <img src={CompassRose} alt="Compass Rose" className="logo" onClick={this.handleToggle} />
          <Drawer
            docked={false}
            width={125}
            open={this.state.open}
            onRequestChange={open => this.setState({ open })}
            containerClassName="mui-menu"
            containerStyle={{
              background: 'teal200'
            }}
          >
            <Link to="/home" className="home-nav-link">
              Home
            </Link>
            <Link to={`/profile/user/${this.props.user.id}`} className="home-nav-link">
              Profile
            </Link>
            <Link to="/search" className="home-nav-link">
              Search
            </Link>
            <Link to={`/forum/create/${this.props.user.id}`} className="home-nav-link">
              Create Post
            </Link>
            <Link to="/forum" className="home-nav-link">
              Forum
            </Link>
            <Link to="/about" className="home-nav-link">
              About
            </Link>
            <Link to="/feedback" className="home-nav-link">
              Help and Feedback
            </Link>
            <a href={process.env.REACT_APP_LOGOUT} className="home-nav-link">
              Logout
            </a>
          </Drawer>
          <section className="text-contaner">{this.props.user && <p>{this.props.user.username}</p>}</section>
        </div>
        <div className="menu-margin" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userData
  };
}
export default connect(mapStateToProps, { getUser })(Header);
