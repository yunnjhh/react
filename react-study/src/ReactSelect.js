// import React from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// 기본 select box
const SelectBox1 = () => {
    return (
        <select>
            <option key = "banana" value = "banana">바나나</option>
            <option key = "apple" value = "apple">사과</option>
            <option key = "orange" value = "orange">오렌지</option>
        </select>
    );
};

const Option = [
    { value: "red", name: "빨"},
    { value: "yellow", name: "노"},
    { value: "blue", name: "파"},
];

// props로 옵션 받기 
const SelectBox2 = (props) => {
    return (
        <select>
            {props.options.map(o => (
                <option key={o.value} value={o.value}>{o.name}</option>
                ))}
        </select>
    )
};

// default value 설정(최초 렌더링 시 설정값) -> X
const SelectBox3 = (props) => {
    return (
        <select>
            {props.options.map(o => (
                <option value={o.value} defaultValue={props.defaultValue === o.value}>{o.name}</option>
            ))}
        </select>
    )
}

// select box에 event handler 추가
const SelectBox4 = (props) => {
    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <select onChange={handleChange}>
            {props.ops.map( o => (
                <option key={o.value} value={o.value}>{o.name}</option>
            ))}
        </select>
    );
};

// 라이브러리 사용 
const option2 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'aa', label: 'aa' },
    { value: 'bb', label: 'bb' },
    { value: 'cc', label: 'cc' },
    { value: 'ccdd', label: 'ccdd' },
]

const animatedComponents = makeAnimated();

function SelectBox6() {
    return (
        <Select 
            options={option2}
            components={animatedComponents}
            isMulti
            closeMenuOnSelect={false}
        />
    );
}

const ReactSelect = () => {
    return (
        <>
            SelectBox1 <br />
            <SelectBox1 />

            <hr />
            SelectBox2 <br />
            <SelectBox2 options={Option} />

            <hr />
            SelectBox3 <br />
            <SelectBox3 options={Option} defaultValue = "yellow" />

            <hr />
            SelectBox4 <br />
            <SelectBox4 ops={Option} />

            <hr />
            SelectBox5 <br />
            <Select options={option2} placeholder='고르시오' /> <br/>
            <Select defaultValue={option2[2]} options={option2} placeholder='Select' /> <br />

            <hr />
            SelectBox6 <br />
            <SelectBox6 />
        </>
    );
};

export default ReactSelect;