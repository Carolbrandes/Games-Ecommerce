import React from 'react';
import styled from 'styled-components';
import { FaGhost } from 'react-icons/fa';

const Logo = () => {
    const Logo = styled.h1`
        font-family: 'Press Start 2P', cursive;
        font-size: 30px;
        color: #002642;
        display: flex;
        justify-content: center;
        align-items: center;
       

        svg{
            margin-left: 20px;
        }
    `
    return (
        <Logo>
            Let's Play <FaGhost color="#f46036" size="40" />
        </Logo>
    )
}

export default Logo;
