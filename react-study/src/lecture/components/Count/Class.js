import React, { Component } from "react";

const buttonStyle = {
    color: 'white',
    backgroundColor: 'skyblue',
    border: '1px solid black',
    fontSize: '20px'
}
// 클래스형 컴포넌트 상태관리 : state 라는 개체를 사용
class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    // state = {
    //     count: 0,
    // }

    render() {
        return (
            <div>
                <ul>
                    <h2>class component state</h2>
                </ul>
                <ul>
                    <li style = {{color: 'red'}}>{this.state.count}</li>
                </ul>
                <ul>
                    <li><button style={buttonStyle} 
                            onClick={() => this.setState({count: this.state.count+1})}>+1</button></li>
                </ul>
                <ul>
                    <li><button style={buttonStyle} 
                            onClick={() => this.setState({count: this.state.count-1})}>-1</button></li>
                </ul>
            </div>
        )
    }
}

export default Class;