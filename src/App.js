import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ItemListContainer from './Components/ItemListContainer';


function App() {
  return (
    <>
      <Header/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <Footer/>

    </>
  );
}

export default App;
