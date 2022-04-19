import './App.css';
import ImagenSuperior from './componentes/ImagenSuperior';
import ProductosMasVendidos from './componentes/Secciones/ProductosMasVendidos';
import ResponsiveAppBar from './componentes/NavBar/ResponsiveAppBar';
import ItemDetailContainer from './componentes/Cartas/ItemDetailContainer';
import Cart from './componentes/Carrito/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/Cartas/ItemListContainer';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <ImagenSuperior />

        <Routes>

          <Route exact path="/" element={<ProductosMasVendidos />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}


