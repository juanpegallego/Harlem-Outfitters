import './App.scss';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from './Main';
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Components/AppContext';




function App() {

  const links = ['Accesorios', 'Camisetas']
  const titulo = 'Harlem Outfitters'




  return (
    <CartProvider>
      <BrowserRouter>
        <Header
          links={links}
          titulo={titulo}
        />
        <Main />
        <Footer />

      </BrowserRouter>
    </CartProvider>



  );
}

export default App;
