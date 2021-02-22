import React from 'react';
import { GlobalContext } from '../../GlobalStore';
import { Button, Col } from 'reactstrap';
import styled from 'styled-components';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const Produto = ({ id, name, price, score, image }) => {
    const { itensCarrinho, setitensCarrinho } = React.useContext(GlobalContext);

    function handleClick(event) {
        event.preventDefault();
        
        let produtoSelecionado = itensCarrinho.find(item => item.id == id);

        if(produtoSelecionado){
            setitensCarrinho([...itensCarrinho, produtoSelecionado.quantidade += 1]);
        }else{
            setitensCarrinho([...itensCarrinho, {id, name, price, image, quantidade: 1}])
        } 
    }


    const Produto = styled.div`
            border: 1px solid rgba(0, 39, 66, 0.2);
            border-radius: 10px;
            background-color: #fff;
            height: 500px;

            h2{
                color: #333;
                font-size: 20px;
                text-align: center;
                font-weight: 700;
            }

            p{
                color: #f46036;
                font-size: 20px;
                text-align: center;
                font-weight: bold;
            }

            span{
                display: block;
                position: absolute;
                left: 40px;
                top: 20px;
                display: flex;
                align-items: baseline;

                svg{
                    margin-left: 5px;
                }
            }

           #quantidade{
               width: 80px;
               border-radius: 50px;
               text-align: center;
               padding-left: 20px;
           }

            button{
                text-transform: uppercase;
                font-size: 20px;
                border-radius: 50px;
                padding: 10px 20px;
                outline: none;
                border: none;
                display: block;
                width: 100%;
                background-color: #002642;
                color: #fff;

                &:hover{
                    background-color: rgb(244, 96, 54); 
                    transition: 0.3s;
                }
            }
    `;


    return (
        <Produto className="produto d-flex flex-column align-items-center p-3 mb-5">
            <span>{score} <FaStar color="#f46036" size="20" /></span>
            <img src={`./assets/${image}`} alt={name} className="img-fluid mt-5 mb-3" />
            <h2>{name}</h2>
            <p>R$ {price}</p>

        
            <Col className="pt-3" xs="12" md="10">
                <Button className="d-flex justify-content-center align-items-center"
                    onClick={handleClick}>
                    <FaShoppingCart className="mr-2" size="20" color="#fff" /> Comprar
                </Button>
            </Col>
        </Produto>
    )
}

export default Produto;
