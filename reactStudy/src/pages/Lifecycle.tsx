import React, { Component } from 'react';

export default class Lifecycle extends Component {
  constructor(props: any) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return <div>Lifecycle</div>;
  }
}
class A extends Component {}
