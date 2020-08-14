import React, { Component } from 'react';
import InputAdd from './components/InputAdd';
import Edit from './components/Edit';
import NoteList from './components/NoteList';
import Navbar from './components/Navbar';
import {Switch , Route} from 'react-router-dom';
import './App.css';


export class App extends Component {
 
  state ={
    notes : [] ,
    error : '',
    edit : ''
  }

  addText = (text)=>{
      if(text){
        this.setState({
          notes : [...this.state.notes , text]
        });

      }
  }

  removeText = (note)=>{
      const index = this.state.notes.indexOf(note);
      const fnote = this.state.notes[index];
      
      this.setState({
        notes : this.state.notes.filter((note)=>note !== fnote)
      })
  }

  editText = (lastnote ,newnote)=>{
    const noteList = this.state.notes;
    const index = this.state.notes.indexOf(lastnote);
    
    noteList[index] = newnote;
    

    this.setState({
      notes : noteList
    })
    
  }

  handleEdit = (note)=>{
    const index = this.state.notes.indexOf(note);
    const fnote = this.state.notes[index];
    this.setState({
      edit : fnote 
    })

    
  }




  render() {
    return (
      <div className="app-container wow bounceInRight"  data-wow-duration="1s" data-wow-dely="0.5s">
        {/* <h5 className="text-center bg-info  p-3 header-text">Note List <span className="fa fa-book"></span></h5> */}
              <Navbar/>
             
                <Switch>
                      <Route path="/" exact  component={()=>{
                        return (
                          <>
                          <InputAdd addText={this.addText}/>
                          <NoteList lists={this.state.notes} editText={this.editText} removeText={this.removeText} handleEdit={this.handleEdit}/>   
                          </>
                        )
                      }}/>
                      <Route path="/edit" exact component={(props)=>{
                        return <Edit {...props}  editText={this.editText} edit={this.state.edit}/>
                      }}/>

                      
                </Switch>
      </div>
    )
  }
}

export default App
