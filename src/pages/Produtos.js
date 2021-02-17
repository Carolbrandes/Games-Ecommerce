import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Produto from '../components/Produto/Produto';


const Produtos = () => {
    const [listaProdutos, setListaProdutos] = React.useState(null);
   
    React.useEffect(() => {
        axios.get('./data/products.json')
            .then((resp) => {
                setListaProdutos(resp.data);
                console.log(listaProdutos);
            })
            .catch((erro) => {
                console.log("erro");
            })
    }, []);

  
    const ProdutosWrapper = styled.section`
        height: 800px;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
        padding-top: 200px;
    `;


    return (
        <Container>
            <ProdutosWrapper>
                <Row>
                    {listaProdutos && listaProdutos.map(prod => (
                       <Col xs="12" md="4" key={prod.id}>
                           <Produto id={prod.id} name={prod.name} price={prod.price} score={prod.score} image={prod.image} />
                       </Col>
                    ))}
                </Row>
            </ProdutosWrapper>
        </Container>
    )
}

export default Produtos;
