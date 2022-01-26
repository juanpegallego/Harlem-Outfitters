import './App.scss';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from './Main';
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Components/AppContext';
import WhatsappWidget from './Components/WhatsappWidget';




function App() {

  const links = ['Como comprar', 'Nosotros']
  const titulo = 'Harlem Outfitters'




  return (

    <CartProvider>
      <BrowserRouter>
        <WhatsappWidget />
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
