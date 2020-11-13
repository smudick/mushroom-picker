import React, { Component } from 'react';
import Mushroom from '../Mushroom';

class Forest extends Component {
  render() {
    return (
      <div className='d-flex flex-wrap forest'>
        {Object.keys(this.props.mushrooms).map((key) => (
          <Mushroom key={key} index={key} details={this.props.mushrooms[key]}/>
        ))}
      </div>
    );
  }
}

export default Forest;
