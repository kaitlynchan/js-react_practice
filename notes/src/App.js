import React, { Component } from 'react';
import 'milligram';

import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

class App extends Component {
  constructor(){
    super();
    const MKEY = "MARKNOTES";
    const localNotes = JSON.parse(localStorage.getItem(MKEY));
    this.state = {
      notes: localNotes? localNotes : [],
      selectedNote: '',
      deleted: false
    }
    this.change=this.change.bind(this);
    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.generatedId = this.generatedId.bind(this);

  }
  change(){
    console.log('changed');
  }

  addNote(){
    {/*need a unique id*/}
    const guid = this.generatedId();
    const note = {id: guid, body: 'New note...'};
    const newNotes = this.state.notes;
    newNotes.push(note);
    this.setState({notes: newNotes});
    this.selectNote(note);
    this.save(this.state.notes);
  }


  selectNote(note){
    if (note === this.state.selectedNote) return;
    this.setState({selectedNote: note});
  }

  save(notes) {
    if (!notes) return;
    const MKEY = 'MARKNOTES';
    localStorage.setItem(MKEY, JSON.stringify(notes));
  }

  generatedId(){
    return this.gen4() + this.gen4() + '-' + this.gen4() + '-' + this.gen4() + '-' + this.gen4() + this.gen4() + this.gen4();
  }

  gen4() {
     return Math.floor((1 + Math.random()) * 0x10000)
       .toString(16)
       .substring(1);
   }

   updateNote(body){
     let notes = this.state.notes;
     let currentNote = this.state.selectedNote;
     currentNote.body = body;
     this.setState({selectedNote: currentNote});

     let nIndex = notes.findIndex((n) => {
       return n.id === currentNote.id;
     });

     console.log(notes[nIndex]);
     console.log(nIndex);

     notes[nIndex].body = currentNote.body;

     this.setState({notes: notes});
     this.save(this.state.notes);
   }

  render() {
    return (
      <div className="App container">
        <h1>Notes</h1>
        <div className='row'>
          <Sidebar delete={this.deleteNote} add={this.addNote} select={this.selectNote} deleted={this.state.deleted} selected={this.state.selectedNote} notes={this.state.notes}/>
          { this.state.notes.length > 0 ?
            <Editor change={this.updateNote} currentNote={this.state.selectedNote} />
          :
            <div>Add a note on the left!</div>
          }
        </div>
      </div>
    );
  }
}

export default App;
