import React , {useState } from 'react';
import './notestyles.css';

function InputAdd({addText}) {
    const [text , setText] = useState('');
    // const inputRef = useRef(null)

    const submitForm = (e) =>{
       e.preventDefault();
       addText(text);
       setText('')
    //    inputRef.current.focus();
    }


    return (
        <form onSubmit={submitForm} className="mx-2 my-2">
                <input  onChange={(e)=>setText(e.target.value)} value={text} className="form-control add-input text-center" type="text" placeholder="تایپ کنید..."/>
                <button className="add-btn btn btn-outline-success text-center" type="submit"><span className="fa fa-plus mt-1"></span></button>
        </form>
    )
}

export default InputAdd;
