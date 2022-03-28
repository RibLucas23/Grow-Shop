import './App.css';
import ImagenSuperior from './componentes/ImagenSuperior';
import ProductosMasVendidos from './componentes/ProductosMasVendidos';
import ResponsiveAppBar from './componentes/ResponsiveAppBar';

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <ImagenSuperior />
      <ProductosMasVendidos />

    </>
  );
}


