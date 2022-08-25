import React from "react";


export default function Editor (props) {
    
    return (
        <div className="container-editor">
            <header>
                <h1>Editor</h1>
                <div className="icon-max"><i className="fa-solid fa-maximize"></i></div>
            </header>
            <textarea name="editor" id="editor" value={props.userInput} onChange={props.handleChange} ></textarea>
            
        </div>
    )
}