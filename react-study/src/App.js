import React, { useState } from 'react';
import ExUseState from './ExUseState';
// import AppUgly from './ExUseState'; 
import useInput from './ExUseInput';
import useTabs from './UseTabs.js';

const content = [
  {
      tab: "Section 1", 
      content: "I'm the content of the Section 1"
  },
  {
      tab: "Section 2", 
      content: "I'm the content of the Section 2"
  }
]

// function App() {
const App = () => {
  // const maxLength = value => value.length < 10;
  const checkText = value => !value.includes("@");
  const name = useInput("Mr.", checkText);

  const {currentItem, changeItem} = useTabs(1, content);

  return (
    <div className="App"> 
      <div>
        <h3>UseState</h3>
        <ExUseState />
        <hr />
      </div>

      <div>
        <h3>UseInput</h3>
        <input placeholder = "Name" value = {name.value} onChange = {name.onChange} />
        <br />
        <input placeholder = "Name" {...name} /> : name 안의 것을 unpack
        <hr />
      </div>

      <div>
        <h3>UseTabs</h3>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
}

export default App;
