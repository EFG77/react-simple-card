import React, { Component } from 'react';

export default class Descrip extends Component {
  render() {
    return (
      <div className="destore ctext"> 
        {this.props.Story}
      </div>
    );
  }
}
