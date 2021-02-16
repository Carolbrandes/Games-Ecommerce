import React from 'react';
import { GlobalContext } from '../GlobalStore';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'reactstrap';


const Checkout = () => {
    const { itensCarrinho, setitensCarrinho, valorFrete, setValorFrete, valorSubTotal, setValorSubTotal, valorTotal, setValorTotal } = React.useContext(GlobalContext);


    function calculaFrete(itensCarrinho, setValorFrete) {
        let valor = itensCarrinho.reduce((acc, atual) => {
            if (atual.quantidade * atual.price >= 250) {
                return 0;
            } else {
                let v = acc + atual.quantidade * 10;

                if (v >= 250) {
                    return 0;
                } else {
                    return v;
                }
            }
        }, 0);

        setValorFrete(valor);
    }


    function calculaSubTotal(itensCarrinho, setValorSubTotal) {
        console.log(itensCarrinho);
        let subtotal = itensCarrinho.reduce((acc, atual) => acc + atual.quantidade * atual.price, 0);
        setValorSubTotal(subtotal);
    }

    function calcularTotal(valorFrete, valorSubTotal, setValorTotal) {
        setValorTotal(valorFrete + valorSubTotal)
    }


    const addQtd = (id, itensCarrinho) => {
        setitensCarrinho([...itensCarrinho, itensCarrinho.find(item => item.id === id).quantidade += 1])
        
        calculaFrete(itensCarrinho, setValorFrete);
        calculaSubTotal(itensCarrinho, setValorSubTotal);
        calcularTotal(valorFrete, valorSubTotal, setValorTotal);
    }

    const removeQtd = (id, itensCarrinho) => {
        setitensCarrinho([...itensCarrinho, itensCarrinho.find(item => item.id === id).quantidade -= 1])
      
        calculaFrete(itensCarrinho, setValorFrete);
        calculaSubTotal(itensCarrinho, setValorSubTotal);
        calcularTotal(valorFrete, valorSubTotal, setValorTotal);
    }

    React.useEffect(() => {
        itensCarrinho.lenght  !== 0 && setitensCarrinho(itensCarrinho.filter(item => 'id' in item));
    }, []);

    
    React.useEffect(() => {
        calculaFrete(itensCarrinho, setValorFrete);
    }, []);

    React.useEffect(() => {
        calculaSubTotal(itensCarrinho, setValorSubTotal);
    }, []);

    React.useEffect(() => {
        calcularTotal(valorFrete, valorSubTotal, setValorTotal);
    }, []);


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
                        {valorSubTotal && <p>Subtotal: R$ {valorSubTotal}</p>}
                        <p>Total: R${valorFrete + valorSubTotal}</p>

                    </>

                    :
                    <p>Sacola Vazia</p>
                }
            </Container>
        </CheckoutWrapper >
    )
}

export default Checkout;
