import React from 'react';
import axios from 'axios';

export class EmailForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      to: 'mister.lake@gmail.com',
      subject: 'email from personal site',
      text: '',
      email: '',
      phone: '',
      name: ''
    }
    this.send = this.send.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  send(){
    axios.get('/send', {
      params: {
        to: this.state.to,
        subject: this.state.subject,
        text: ' From: ' + this.state.name + ' Email: ' + this.state.email + ' Phone: ' + this.state.phone + 'Message: ' + this.state.text,
        email: this.state.email,
        phone: this.state.phone,
        name: this.state.name
      }
    })
    .then(function (response) {
      console.log('success');
    })
    .catch(function (error) {
      console.log('error');
    }); 
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.send();
  }

  render(){
    return(
      <div id="emailForm">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="your name" value={this.state.name} onChange={this.handleChange} /><br />
          <input type="text" name="email" placeholder="your email" value={this.state.email} onChange={this.handleChange}  /><br />
          <input type="text" name="text" placeholder="your message" value={this.state.text} onChange={this.handleChange}  /><br />
          <input type="text" name="phone" placeholder="your phone number(optional)" value={this.state.phone} onChange={this.handleChange}  /><br />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
