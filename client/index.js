import React from 'react';
import { render } from 'react-dom';

import { Title } from './components/title/title';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));