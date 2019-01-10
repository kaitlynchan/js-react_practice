import React, { Component } from 'react';

class Sidebar extends Component {

  renderList(){
    let list = [];
    this.props.notes.forEach((note) => {
      if (this.props.deleted){
        return;
      } else{
        list.push(
            <li key={note.id} onClick={() => this.props.select(note)} className={note.id === this.props.selected.id ? 'selected' : ''}>
              { note.body }
            </li>
        );
      }
    });
    return list;
  }
  render() {
    return (
      <div className="sidebar column column-25">
        <button className="button button-clear" onClick={this.props.add}>+ new note</button>
         <dl className="list">
           {this.renderList()}
         </dl>
         <button className="button button-clear" onClick={this.props.delete}>- delete note</button>
      </div>
    );
  }
}

export default Sidebar;
