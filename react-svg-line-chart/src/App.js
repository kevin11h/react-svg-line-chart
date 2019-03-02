import React, { Component } from 'react';
import './LineChart.css';
import LineChart from './LineChart';

class App extends Component {

  createFakeData() {
  	// This Function creates data that doesn't  look entirely random
  	const data= [];

  	for (let x = 0; x <=30; x++) {
  		const random = Math.random();
  		const temp   = data.length > 0 ? data[data.length-1].y : 50;
  		const y      = random >= .45 ? temp + Math.floor(random*20) : temp - Math.floor(random * 20);
  		data.push({x, y});
  	}

  	return data;
  }

  render() {
    return (
      <div className="App">
      	// here render SVG chart
      	<div className="header">react svg line chart [part 1]</div>
      	<LineChart data={this.createFakeData()} />
      </div>
    );
  }
}

export default App;

