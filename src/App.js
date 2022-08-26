import React from 'react';
import './App.css';
import Editor from "./Editor"
import Previewer from "./Previewer"
import { marked } from 'marked'

function App() {
  const placeHolder = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) { \n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\n\nOr _italic_.\n\nOr... wait for it... **_both!_**\n\nAnd feel free to go crazy ~~crossing stuff out~~.\n\n\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------Your content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"

  const [userInput, setUserInput] = React.useState(placeHolder)
  
  
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }


  const markedText = marked.parse(userInput);
  const htmlText = {__html: markedText}


  console.log(htmlText.__html)

  return (
    <div className="App">
      <Editor userInput = {userInput} handleChange = {handleChange} />
      <Previewer htmlText = {htmlText}/>
    </div>
  );
}

export default App;
