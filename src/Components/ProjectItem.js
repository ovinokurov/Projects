import React, { Component } from 'react';

class ProjectItem extends Component {

  deleteProject(id)
  {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="ProjectItem">
        <b>{this.props.project.title}</b>: - {this.props.project.category} <a href="#DELETE" onClick={this.deleteProject.bind(this, this.props.project.id)}>x</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  //project: React.PropTypes.object,
  //onDelete: React.propTypes.func
}

export default ProjectItem;
