import React from 'react';
import './App.css';
import Editor from "./Editor"
import Previewer from "./Previewer"
import { marked } from 'marked'

function App() {
  const [userInput, setUserInput] = React.useState("# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:")
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const markedText = marked.parse(userInput);
  const htmlText = {__html: markedText}

  return (
    <div className="App">
      <Editor userInput = {userInput} handleChange = {handleChange} />
      <Previewer htmlText = {htmlText}/>
    </div>
  );
}

export default App;
