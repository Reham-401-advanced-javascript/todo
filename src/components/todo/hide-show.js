import React from 'react';
import { ToggleContext } from '../contex/show-hide';
import '../todo/todo.scss';

class Content extends React.Component {

  static contextType = ToggleContext; 

  render() {
    return (
      <>
        <button onClick={this.context.toggleStatus}  type="button" className="btn btn-warning"> {this.context.status === 'show' ? 'hide' : 'show'} complete items</button>
              
      </>
    );
  }
}
export default Content;