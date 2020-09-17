import React, { Component } from 'react';
import TODOItem from './TODOItem';


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
                    (<TODOItem key={idx} item={item} deleteItem={(idx) => {this.deleteItem(idx)}}></TODOItem>)
                )}
            </ul>

        </div> 
       
    );
  }
}

