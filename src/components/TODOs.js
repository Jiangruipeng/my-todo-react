import React, { Component } from 'react';


export default class TODOs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items:["learn dva", "learn roaddog", "learn antd"] 
    }
  }



    deleteItem(idx) {
        const newItems = [...this.state.items];
        newItems.splice(idx,1);

        console.log("delete" + idx);
        setTimeout(() => {
            console.log("delete inside async" + idx);

            this.setState({
                items: newItems
            });
          }, 1000)

    }

  render() {
    const {items } = this.state;

    return (
        <div>
            <h3>Todos</h3>
            <ul className="list-group">
                {items.map((item, idx) =>
                    (<li key={idx} className="list-group-item">{item} <button onClick={() => {this.deleteItem(idx)}} className="btn btn-primary">删除</button></li>)
                )}
            </ul>

        </div> 
       
    );
  }
}

