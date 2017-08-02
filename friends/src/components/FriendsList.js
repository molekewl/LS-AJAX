import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendsList extends Component {
  // componentDidMount: Most common case when starting AJAX calls to load in 
  // data for your component. Can call setState: YES
  // another issue: AJAX request might not resolve before the component mounts. If it did, you'd be trying to setState 
  // on an unmounted component. Doing DidMount will guarantee there's a component to update
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map((friend, i) => {
            return (
              <li key={i}>
                <p>{`Friend ${i+1}`}</p>
                <p>{`Name: ${friend.name}`}</p>
                <p>{`Age: ${friend.age}`}</p>
                <p>{`Email: ${friend.email}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // state from reducers property name
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);