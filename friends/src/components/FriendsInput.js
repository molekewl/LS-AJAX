import React, { Component } from 'react';
import { addFriends } from '../actions';

class FriendsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleChangeAge(event) {
    this.setState({
      age: event.target.value
    })
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    //PostFriend(this.state)
    //this.setState({name:'',age:'',email:''})
    this.props.dispatch(addFriends(this.state))
    console.log('Submit Button Click', this.event)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Name' value={this.state.name} onChange={this.handleChangeName}/>
          <input type='text' placeholder='Age' value={this.state.age} onChange={this.handleChangeAge}/>
          <input type='text' placeholder='Email' value={this.state.email} onChange={this.handleChangeEmail}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default FriendsInput;