import React from 'react';

const UserStatus = React.createContext();

class UserPermisions extends React.Component {
  state = {
    authenticated: false
  };
  render() {
    return <UserStatus.Provider value={{ state: this.state }}>{this.props.children}</UserStatus.Provider>;
  }
}
