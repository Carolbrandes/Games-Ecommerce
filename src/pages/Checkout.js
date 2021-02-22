import React from 'react';
import { GlobalContext } from '../GlobalStore';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';


const Checkout = () => {
    const { itensCarrinho, setitensCarrinho, valorFrete, setValorFrete, valorSubTotal, setValorSubTotal, valorTotal, setValorTotal } = React.useContext(GlobalContext);


    const Checkout = styled.main`
        padding-top: 250px;

        .itens-carrinho{
            background-color: #fff;
        }
    `;

    const BotaoQtd = styled.span`
        display: block;
        width: 30px;
        height: 30px;
        background-color: rgb(244, 95, 54);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 25px;
        cursor: pointer;
    `

    return (
        <Checkout>
            <Container>
                <Row>
                    {itensCarrinho.length > 0 ? itensCarrinho.filter(item => typeof item !== 'number' && item.quantidade > 0).map(({ id, name, price, image, quantidade }) =>

                    (
                        <Col className="d-flex justify-content-around align-items-center p-2 itens-carrinho mb-3" xs="12" key={id}>
                            <Col md="2"> <img className="img-fluid" src={`./assets/${image}`} alt="#" /></Col>
                            <Col md="3"><p>{name}</p></Col>
                            <Col md="3">
                                <div className="d-flex">
                                    <BotaoQtd className="mr-3" onClick={() => setitensCarrinho([...itensCarrinho, itensCarrinho.find(i => i.id == id).quantidade = quantidade - 1])}>-</BotaoQtd>
                                    <p>{quantidade}</p>
                                    <BotaoQtd onClick={() => setitensCarrinho([...itensCarrinho, itensCarrinho.find(i => i.id == id).quantidade = quantidade + 1])} className="ml-3">+</BotaoQtd>
                                </div>
                            </Col>
                            <Col md="2"><p>R$ {price}</p></Col>
                            <Col md="2"> <p>R$ {price * quantidade}</p></Col>
                        </Col>
                    )

                    )
                        :
                        <p>Carrinho vazio</p>
                    }
                </Row>
            </Container>
        </Checkout>
    )
}


export default Checkout;
