import React from 'react';
import { GlobalContext } from '../GlobalStore';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'reactstrap';


const Checkout = () => {
    const { itensCarrinho, setitensCarrinho, valorFrete, setValorFrete } = React.useContext(GlobalContext);

    const calculaFrete = (itensCarrinho, setValorFrete) => {
        let frete = itensCarrinho.reduce((acc, atual) => {
            if (!atual.quantidade) {
                atual = 1;
            }

            return acc + atual.quantidade * 10;
        }, 0);

        frete >= 250 ? setValorFrete(0) : setValorFrete(frete);

    }

    React.useEffect(() => {
        calculaFrete(itensCarrinho, setValorFrete);
    }, []);

    React.useEffect(() => {
        calculaFrete(itensCarrinho, setValorFrete);
    }, [itensCarrinho, valorFrete])


    const addQtd = (id, itensCarrinho) => {
        setitensCarrinho([...itensCarrinho, itensCarrinho.find(item => item.id == id).quantidade += 1])
    }

    const removeQtd = (id, itensCarrinho) => {
        setitensCarrinho([...itensCarrinho, itensCarrinho.find(item => item.id == id).quantidade -= 1])
    }


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
                                            addQtd(item.id, itensCarrinho);
                                        }}>
                                        +
                                        </button>
                                    <input type="number" value={item.quantidade} onChange={({ target }) => setitensCarrinho([...itensCarrinho, item.quantidade = +target.value])} />
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            removeQtd(item.id, itensCarrinho);
                                        }}
                                    >-
                                </button>
                                </div>
                                <p>{item.price * item.quantidade}</p>

                            </div>
                        ))}

                        {valorFrete ? <p>Valor do Frete: R$ {valorFrete}</p> : <p>Valor do Frete: Grátis</p>}

                    </>


                    :
                    <p>Sacola Vazia</p>
                }
            </Container>
        </CheckoutWrapper >
    )
}

export default Checkout;
