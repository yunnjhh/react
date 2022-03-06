import React, { useState } from 'react';

const buttonStyle = {
    color: 'white',
    backgroundColor: 'green',
    border: '1px solid black',
    fontSize: '20px'
}

const Function = () => {
    const [count, setCount] = useState(0);
    const minus = () => setCount(c => c-1);

    return (
        <div>
           <ul>
                <h2>function component state</h2>
            </ul>
            <ul>
                <li style={{ color: 'red'}}>{count}</li>
            </ul>
            <ul>
                <li><button style={buttonStyle} onClick = {() => setCount(c => c+1)} >+1</button> </li>
            </ul>
            <ul>
                <li><button style={buttonStyle} onClick = {minus} >-1</button> </li>
            </ul>
        </div>
    )
}

export default Function;