import React, { useState } from 'react';

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    // function
    const onChange = event => {
        // console.log(event.target);
        const {
            target: {value}
        } = event; 

        let willUpdate = true;
        if (typeof validator === "function") {
            console.log('function');
            willUpdate = validator(value);
        } 
        if (willUpdate) {
            setValue(value);
        }
        
    }
    return { value, onChange };
};

export default useInput;