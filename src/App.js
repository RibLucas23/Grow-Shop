import './App.css';
import ImagenSuperior from './componentes/ImagenSuperior';
import ProductosMasVendidos from './componentes/Secciones/ProductosMasVendidos';
import ResponsiveAppBar from './componentes/NavBar/ResponsiveAppBar';
import ItemDetailContainer from './componentes/Cartas/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/Cartas/ItemListContainer';
import ContextProvider from './componentes/Context/ContextProvider';
import CartContainer from './componentes/Carrito/CartContainer';
import TerminarCompra from './componentes/Carrito/TerminarCompra';
import AgregarProductos from './componentes/AgregarProductos/AgregarProductos';



export default function App() {
  return (
    <>
      <ContextProvider>

        <BrowserRouter>
          <ResponsiveAppBar />
          <ImagenSuperior />

          <Routes>
            <Route exact path="/" element={<ProductosMasVendidos />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<CartContainer />} />
            <Route exact path="/cart/finish" element={<TerminarCompra />} />
            <Route exact path="/agregarProducto" element={<AgregarProductos />} />
          </Routes>


        </BrowserRouter>
      </ContextProvider>
    </>
  );
}


