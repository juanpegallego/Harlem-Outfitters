import './App.scss';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from './Main';
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Components/AppContext';
import WhatsappWidget from './Components/WhatsappWidget';




function App() {





  return (

    <CartProvider>
      <BrowserRouter>
        <WhatsappWidget />
        <Header />

        <Main />
        <Footer />

      </BrowserRouter>
    </CartProvider>



  );
}

export default App;
