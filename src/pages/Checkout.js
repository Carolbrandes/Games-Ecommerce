import React from 'react';
import { GlobalContext } from '../GlobalStore';
import styled from 'styled-components';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';


const Checkout = () => {
    const { itensCarrinho, setitensCarrinho, valorFrete, setValorFrete, valorSubTotal, setValorSubTotal, valorTotal, setValorTotal } = React.useContext(GlobalContext);


    const Checkout = styled.main`
        padding-top: 250px;
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
                        <Col className="d-flex justify-content-around align-items-center" md="8" key={id}>
                            <img src={`./assets/${image}`} alt="#" />
                            <p>{name}</p>
                            <div className="d-flex">
                                <BotaoQtd className="mr-3" onClick={() => setitensCarrinho([...itensCarrinho, itensCarrinho.find(i => i.id == id )])}>-</BotaoQtd>
                                <p>{quantidade}</p>
                                <BotaoQtd onClick={() => setitensCarrinho([...itensCarrinho, itensCarrinho.find(i => i.id == id )])} className="ml-3">+</BotaoQtd>
                            </div>
                            <p>R$ {price}</p>
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
