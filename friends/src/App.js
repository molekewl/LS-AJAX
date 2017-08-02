import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendsInput from './components/FriendsInput';
import DeleteFriend from './components/DeleteFriend';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <FriendsInput dispatch={this.props.dispatch}/>
          <DeleteFriend />
          <FriendsList />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
// you want to map the props
export default connect(mapStateToProps)(App);