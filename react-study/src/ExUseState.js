import { render } from '@testing-library/react';
import React, { useState } from 'react';

// funcion ExUseState() {
const ExUseState = () => {
    const [item, setItem] = useState(1); 
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    return (
        <div>
            <h3>{item}</h3>
            <button onClick = {incrementItem}>Increment</button>
            <button onClick = {decrementItem}>Decrement</button>
        </div>
    );
}

//Class component 
class AppUgly extends React.Component{
    state = {
        item: 1
    }
    render(){
        const { item } = this.state; 
        return (
            <div>
                <h3>{item}</h3>
                <button onClick = {this.incrementItem}>Increment</button>
                <button onClick = {this.decrementItem}>Decrement</button>
            </div>
        );
    }
    incrementItem = () => {
        this.setState(state => {
            return {
                item: state.item +10
            };
        });
    };
    decrementItem = () => {
        this.setState(state => {
            return {
                item: state.item - 10 
            };
        });
    };
}


export default ExUseState; 
// export default AppUgly;