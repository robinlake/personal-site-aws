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
      name: '',
      submitted: 'messageHidden'
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
        text: ' From: ' + this.state.name + ' Email: ' + this.state.email + 'Message: ' + this.state.text,
        email: this.state.email,
        name: this.state.name
      }
    })
    .then(function (response) {
      console.log('success');
      this.setState({submitted: 'foo'})
    }.bind(this))
    .catch(function (error) {
      console.log('error');
      this.setState({submitted: 'foo'})
    }.bind(this)); 
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
        <p id="submitMessage" className={this.state.submitted}>Email Sent!</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="form-control form-field" name="name" placeholder="your name" value={this.state.name} onChange={this.handleChange} />
          <input type="text" className="form-control form-field" name="email" placeholder="your email" value={this.state.email} onChange={this.handleChange}  />
          <textarea type="text" className="form-control" name="text" rows="3" placeholder="your message" value={this.state.text} onChange={this.handleChange}  />
          <input type="submit" className="btn btn-primary submitButton" value="submit" />
        </form>
      </div>
    )
  }
}
