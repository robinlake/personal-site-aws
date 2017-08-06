import React from 'react';
import { SocialLinks } from './socialLinks';


export class Contact extends React.Component {
  render(){
    return (
      <div id="Contact">
        <div id="contactInfo">
          <p className="sectionHeader contactHeader">Contact</p>
          <SocialLinks />
        </div>
      </div>
    );
  }
}
