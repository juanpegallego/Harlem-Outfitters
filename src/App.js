import './App.scss';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from './Main';
import { BrowserRouter } from 'react-router-dom'

function App() {

  const links = ['electronics', 'jewelery']
  const titulo = 'Harlem Outfitters'




  return (

    <BrowserRouter>
      <Header
        links={links}
        titulo={titulo}
      />
      <Main />
      <Footer />

    </BrowserRouter>


  );
}

export default App;
