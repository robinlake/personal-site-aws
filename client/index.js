import React from 'react';
import { render } from 'react-dom';

import { Title } from './components/title/title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));