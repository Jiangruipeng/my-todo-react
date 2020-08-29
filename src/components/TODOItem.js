import React, { Component } from 'react';


export default class TODOItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li className="list-group-item">
            <span>{this.props.item} </span>
            <button onClick={(idx) => {this.props.deleteItem(idx)}} className="btn btn-primary">删除</button>
        </li>
       
    );
  }
}

