import React from 'react';
import { GlobalContext } from '../GlobalStore';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import InputQtd from '../components/form/InputQtd';

const Checkout = () => {
    const { itensCarrinho, setitensCarrinho, valorFrete, setValorFrete, valorSubTotal, setValorSubTotal, valorTotal, setValorTotal } = React.useContext(GlobalContext);

    React.useEffect(() => {
        console.log(itensCarrinho);
    }, [])



   

    return (
       <>checkout</>
    )
}

export default Checkout;
