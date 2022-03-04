import React from 'react';

function GuideTitle() {
    const date = new Date();
    const subject = (date.getSeconds() % 2 === 0) ? "리액트" : "React";
    const title = `${subject} 학습 가이드 `;
    const titleStyle = { color: 'red', textDecoration: "underline" };
    return (
        <header className='guide-title'>
            <h2 style={{ color: '#C0FFEE' }}>{ title }</h2> 
            <h3 style={titleStyle}>{ subject }</h3>   
        </header>
    );
}


export default GuideTitle;