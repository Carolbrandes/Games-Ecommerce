import React from 'react';
import styled from 'styled-components';

const InputQtd = ({ ...props }) => {
    const [value, setValue] = React.useState(0);

    const Input = styled.input`
            width: ${props => props.width || "80px"};
            height: 45px;
            display: block;
            border-radius: 50px;
            border: 1px solid #002642;
            outline: none;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
    `
    return (
        <Input min="0" type="number" value={value} onChange={({target}) => setValue(target.value)} {...props} />
    )
}


export default InputQtd;
