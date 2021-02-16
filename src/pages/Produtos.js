import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { GlobalContext } from '../GlobalStore';


const Produtos = () => {
    const [listaProdutos, setListaProdutos] = React.useState(null);
    const { itensCarrinho, setitensCarrinho } = React.useContext(GlobalContext);


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

    const handleClickAdd = (event, produto) => {
        event.preventDefault();

        const adicionarNoCarrinho = (produto) => {
            setitensCarrinho([...itensCarrinho, produto]);
        }

        if (itensCarrinho.some(item => item.id === produto.id)) {
            console.log("ja tem esse produto");
            setitensCarrinho([...itensCarrinho, itensCarrinho.find(item => item.id === produto.id).quantidade += 1]);

        } else {
            console.log("Produto novo");
            produto.quantidade = 1;

            adicionarNoCarrinho(produto)

        }

        console.log(itensCarrinho);
    }




    const ProdutosWrapper = styled.section`
        height: 800px;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
        padding-top: 200px;

        .produto{
            border: 1px solid rgba(0, 39, 66, 0.2);
            border-radius: 10px;
            background-color: #fff;
            height: 460px;

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

            button{
                text-transform: uppercase;
                font-size: 16px;
                border-radius: 50px;
                padding: 10px 20px;
                outline: none;
                border: none;
            }

            .adicionar{
                background-color: #002642;
                color: #fff;
            }

        
        }
    `


    return (
        <Container>
            <ProdutosWrapper>
                <Row>
                    {listaProdutos && listaProdutos.map(prod => (
                        <Col md="4" key={prod.id} >
                            <div className="produto d-flex flex-column align-items-center p-3 mb-5">
                                <span>{prod.score} <FaStar color="#f46036" size="20" /></span>
                                <img src={`./assets/${prod.image}`} alt={prod.name} className="img-fluid mt-5 mb-3" />
                                <h2>{prod.name}</h2>
                                <p>R$ {prod.price}</p>

                                <button className="adicionar mr-2" onClick={(event) => handleClickAdd(event, prod, itensCarrinho, setitensCarrinho)}>Comprar</button>

                            </div>
                        </Col>
                    ))}
                </Row>
            </ProdutosWrapper>
        </Container>
    )
}

export default Produtos;
