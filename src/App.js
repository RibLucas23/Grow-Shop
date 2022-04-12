import './App.css';
import ImagenSuperior from './componentes/ImagenSuperior';
import ProductosMasVendidos from './componentes/Secciones/ProductosMasVendidos';
import ResponsiveAppBar from './componentes/NavBar/ResponsiveAppBar';
import ItemDetailContainer from './componentes/Cartas/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <ImagenSuperior />

        <Routes>

          <Route exact path="/" element={<ProductosMasVendidos />} />
          <Route exact path="/category/:id" element={<ProductosMasVendidos />} />

          <Route exact path="/item/:id" element={<ItemDetailContainer />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}


