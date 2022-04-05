import './App.css';
import ImagenSuperior from './componentes/ImagenSuperior';
import ProductosMasVendidos from './componentes/Secciones/ProductosMasVendidos';
import ResponsiveAppBar from './componentes/NavBar/ResponsiveAppBar';
import ContadorClicks from './componentes/ContadorClicks';

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <ImagenSuperior />
      <ProductosMasVendidos />
      <ContadorClicks />
    </>
  );
}


