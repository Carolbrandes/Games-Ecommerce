import React from 'react';
import styled from 'styled-components';


const InputQtd = ({ value, setValue, ...props }) => {
    
    const Input = styled.input`
            width: ${props => props.width || "60px"};
            height: 45px;
            display: block;
            border-radius: 50px;
            border: 1px solid rgba(0, 39, 66, 0.342);
            outline: none;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 15px;
    `;
    return (

            <Input  min="0" type="number" value={value} onChange={({target}) => setValue(target.value)} {...props} />
   
    )
}


export default InputQtd;
