import React from 'react';
import './notestyles.css';
import Note from './Note';

function NoteList({lists , removeText , editText , handleEdit}) {
    return (
        <div className="list-container">
          {lists ? (
              lists.map((note , i)=>{
                    return <Note key={i} note={note} handleEdit={handleEdit} editText={editText} removeText={removeText}/>
              })
          ) : null}       
        </div>
    )
}

export default NoteList
