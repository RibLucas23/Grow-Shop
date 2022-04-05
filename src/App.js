import './App.css';
import ImagenSuperior from './componentes/ImagenSuperior';
import ProductosMasVendidos from './componentes/Secciones/ProductosMasVendidos';
import ResponsiveAppBar from './componentes/NavBar/ResponsiveAppBar';

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <ImagenSuperior />
      <ProductosMasVendidos />
    </>
  );
}


