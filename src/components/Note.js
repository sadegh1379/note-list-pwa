import React from 'react';
import './notestyles.css';
import {Link } from 'react-router-dom';

function Note({note , removeText , editText  , handleEdit}) {
    return (
        <div className="note-item  wow bounceInUp"
        data-wow-duration="1s" data-wow-dely="0.5s"
        >
            <p>{note}</p>
            <span
            onClick={()=>removeText(note)}
            className="fa fa-trash-o remove-btn float-left"></span>
            <Link to="/edit"><span
            onClick={()=>handleEdit(note)}
            className="fa fa-pencil mx-3 remove-btn float-left"></span>
            </Link>
        </div>
    )
}

export default Note
