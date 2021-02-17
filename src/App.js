import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from './pages/Produtos';
import Checkout from './pages/Checkout';
import Header from './components/Header/Header';
import styled from 'styled-components';

function App() {
  const App = styled.main`
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100vh;
    background-color: #eff1f3;

    :root{
      -primary: #002642;
    }
  `
  return (
    <App>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Produtos />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>

        <Header />
      </BrowserRouter>
    </App>
  );
}

export default App;
