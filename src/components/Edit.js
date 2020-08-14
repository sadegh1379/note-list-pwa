import React , {useState} from 'react'

function Edit(props ) {
    const { edit , editText} = props;
    const [text , setText] = useState(edit);
    

    const submitForm = (e)=>{
       e.preventDefault();
       editText(edit , text);
       props.history.push("/");
       
    }
    return (
        <div className="edit-container mt-4">
            
            {editText ? 
                <form onSubmit={submitForm} className="mx-2 my-2 wow bounceInLeft"  data-wow-duration="1.2s" data-wow-dely="0.1s">
                {/* <input  value={edit} className="form-control  add-input text-center" type="text" /> */}
                <input onChange={(e)=>setText(e.target.value)} value={text} className=" my-3 form-control add-input text-center" type="text" placeholder="...متن جدید"/>

                <button style={{borderRadius:'30px'}} className=" btn btn-outline-success btn-block text-center" type="submit">ویرایش</button>
                </form>
            :  <h1>noting</h1> }
        </div>
    )
}

export default Edit
