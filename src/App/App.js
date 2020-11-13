import React from 'react';
import '../styles/App.scss';
import mushroomData from '../data/mushoomData';
import Forest from './components/Forest';

class App extends React.Component {
  state = {
    mushrooms: mushroomData,
  }

  render() {
    return (
      <div className="App">
        <Forest mushrooms={this.state.mushrooms} />
      </div>
    );
  }
}

export default App;
