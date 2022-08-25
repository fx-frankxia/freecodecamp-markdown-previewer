import React from "react";

export default function Previewer (props) {
    return (
    <div className="container-previewer">
        <header>
            <h1>Previewer</h1>
            <div className="icon-max"><i className="fa-solid fa-maximize"></i></div>  
        </header>
        <main>
        <div id="preview" dangerouslySetInnerHTML={props.htmlText}></div>
        </main>
    </div>
    )
}