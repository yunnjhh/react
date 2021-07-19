import React from 'react';
import ExUseState from './ExUseState';
// import AppUgly from './ExUseState'; 
import useInput from './ExUseInput';

function App() {
  const maxLength = value => value.length < 10;
  const checkText = value => !value.includes("@");
  const name = useInput("Mr.", checkText);
  return (
    <div className="App">
      <h1>App</h1>
      <hr />

      <h3>UseState</h3>
      <ExUseState />
      <hr />

      <h3>UseInput</h3>
      <input placeholder = "Name" value = {name.value} onChange = {name.onChange} />
      <br />
      <input placeholder = "Name" {...name} /> : name 안의 것을 unpack
      <hr />

    </div>
  );
}

export default App;
