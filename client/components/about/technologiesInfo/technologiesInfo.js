import React from 'react';

export class TechnologiesInfo extends React.Component {
  render(){
    return (
      <div id="technologiesInfo">
        <div id="techScroll">
          <div className="techScrollElement">
            <h1>Languages</h1>
            <ul>
            <li>Javascript</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>  
            </ul>  
          </div>
          <div>
            <h1>Databases</h1>
            <ul>
            <li>MySQL</li>
            <li>MariaDB</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            </ul>
          </div>
          <div>
            <h1>Frameworks</h1>
            <ul>
            <li>Laravel</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Express.js</li>
            </ul>
          </div>
          <div>
            <h1>Servers</h1>
            <ul>
            <li>Apache</li>
            <li>Node.js</li>
            </ul>
            <h1>Operating Systems</h1>
            <ul>
            <li>Ubuntu Linux</li>
            <li>Windows</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
