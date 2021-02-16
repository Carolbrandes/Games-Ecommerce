import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { GlobalContext } from '../../GlobalStore';

const Header = () => {
    const { itensCarrinho } = React.useContext(GlobalContext);


    const Header = styled.header`
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #fff;
    `

    const QtdItems = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(244, 95, 54, 0.75);
        color: #fff;
        font-size: 18px;
        position: absolute;
        top: 20px;
        left: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    `

    return (
        <Header>
            <Container>
                <nav>
                    <Row className="justify-content-between">
                        <Col sm="5">
                            <Link to="/"><Logo /></Link>
                        </Col>

                        <Col className="position-relative" sm="1">
                            <Link to="/checkout"><FaShoppingCart color="#002642" size="70%" /></Link>
                            <QtdItems>{itensCarrinho.length}</QtdItems>
                        </Col>
                    </Row>
                </nav>
            </Container>
        </Header>
    )
}

export default Header;
