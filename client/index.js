import React from 'react';
import { render } from 'react-dom';

import { Title } from './components/title/title';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { MainNavbar } from './components/navbar/navbar';
import { ReactNav } from './components/navbar/navbar2';
// import { Particles } from './components/title/particles/particlesComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        {/*<MainNavbar />*/}
        {/*<Particles />*/}
          <ReactNav />
          <Title />
          <About />
          <Projects />
          <Contact />
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));