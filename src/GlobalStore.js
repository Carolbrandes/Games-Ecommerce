import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStore = ({ children }) => {
    const [produtos, setProdutos] = React.useState([]);
    const [itensCarrinho, setitensCarrinho] = React.useState([]);
    const [qtdItensCarrinho, setQtdItensCarrinho] = React.useState(0);
    const [valorSubTotal, setValorSubTotal] = React.useState(0);
    const [valorFrete, setValorFrete] = React.useState(0);
    const [valorTotal, setValorTotal] = React.useState(0);


    return (
        <GlobalContext.Provider value={{produtos, setProdutos, itensCarrinho, setitensCarrinho, qtdItensCarrinho, setQtdItensCarrinho, valorSubTotal, setValorSubTotal, valorFrete, setValorFrete, valorTotal, setValorTotal}}>
            {children}
        </GlobalContext.Provider>
    )
}