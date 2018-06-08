import React, { Component } from 'react';

class TodoItem extends Component {


  render() {
    return (
      <li className="Todo">
        <b>{this.props.todo.title}</b>
      </li>
    );
  }
}

TodoItem.propTypes = {
  //todo: React.PropTypes.object,
  //onDelete: React.propTypes.func
}

export default TodoItem;
