import React, { Component } from 'react';

const nums = [1,2,3,4]
export class Todo extends Component {

  render() {
    return (
    	<div>
      		<input type="text" />
      		<button>click</button>
      		{nums.map(num => (<h3>{num * 2 + " yo"}</h3>))}
     	</div>
    );
  }
}
