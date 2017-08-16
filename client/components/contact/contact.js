import React from 'react';
import { SocialLinks } from './socialLinks';
import { EmailForm } from './emailForm';


export class Contact extends React.Component {
  render(){
    return (
      <div id="Contact">
        <div id="contactInfo">
          <p className="contactHeader">Get In Touch</p>
          <p className="contactParagraph">Whether you're with a small business, local not-for-profit, or just want to say hi, I'd love to hear from you</p>
            <SocialLinks />
            <EmailForm />
        </div>
      </div>
    );
  }
}
