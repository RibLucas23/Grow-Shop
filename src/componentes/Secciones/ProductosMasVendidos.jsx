import ItemListContainer from "../Cartas/ItemListContainer";
export default function ProductosMasVendidos() {

    return (

        <>
            <h1 className='h1'>PRODUCTOS MÁS VENDIDOS</h1>
            <h1 className='h1 dadoVuelta'>_________</h1>
            <div className="cartasTodasContainer">
                <ItemListContainer />

            </div>
        </>
    )
}