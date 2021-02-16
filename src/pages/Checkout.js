import React from 'react';
import { GlobalContext } from '../GlobalStore';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'reactstrap';


const Checkout = () => {
    const [valorFrete, setValorFrete] = React.useState(null);
    const { itensCarrinho, setitensCarrinho } = React.useContext(GlobalContext);
    console.log(itensCarrinho);


    const CheckoutWrapper = styled.section`
        padding-top: 200px;
        
        .item-carrinho{
            background-color: #fff;
        }

        p{
            color: #333;
        }
    `

  

    return (
        <CheckoutWrapper>
            <Container>
                <h2>Sacola de Compras</h2>

                {itensCarrinho.length !== 0 ?
                    <>
                        {itensCarrinho.map(item => (
                            item.image && item.quantidade !== 0 && <div className="my-4 d-flex align-items-center item-carrinho p-3" key={item.id}>
                                <img src={`./assets/${item.image}`} className="img-fluid  mr-3" />
                                <p className="pr-3">{item.name}</p>

                                <p className="pr-3">R$ {item.price}</p>

                                <div className="pr-3 d-flex">
                                    <button
                                        className="mr-2"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setitensCarrinho([...itensCarrinho, item.quantidade = item.quantidade + 1])
                                        }}>
                                        +
                                        </button>
                                    <input type="number" value={item.quantidade} onChange={({ target }) => setitensCarrinho([...itensCarrinho, item.quantidade = +target.value])} />
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setitensCarrinho([...itensCarrinho, item.quantidade = item.quantidade - 1])
                                        }}
                                    >-
                                </button>
                                </div>
                                <p>{item.price * item.quantidade}</p>

                            </div>
                        ))}

                        {valorFrete  && <p>Frete: {valorFrete}</p> } 

                    </>


                    :
                    <p>Sacola Vazia</p>
                }
            </Container>
        </CheckoutWrapper >
    )
}

export default Checkout;
