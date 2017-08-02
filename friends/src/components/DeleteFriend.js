import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFriend } from '../actions'

class DeleteFriend extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     age: '',
  //     email: ''
  //   }
  // }
  // set this way it removes the first item in the user list. FIFO
  handleDelete(event) {
     console.log(this.props);
     console.log('Remove Button Clicked')
     this.props.removeFriend()
  }

  render() {
    return (
      <li>
        <button onClick={this.handleDelete.bind(this)}>Remove</button>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}
export default connect(mapStateToProps, { removeFriend })(DeleteFriend)