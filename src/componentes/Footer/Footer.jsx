import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
    return (
        <footer className='footer' >
            <div className='footer-container'>
                {/* CATEGORIAS  */}
                <div className='footer-categorias '>
                    <ul>
                        <li>
                            <Link className='link' to='/'>Inicio</Link>
                        </li>
                        <li>
                            <Link className='link' to='/category/Invernaderos y Carpas'>Invernaderos y Carpas</Link>
                        </li>
                        <li>
                            <Link className='link' to='/category/Luces de cultivo'>Luces de cultivo</Link>
                        </li>
                        <li>
                            <Link className='link' to='/category/Fertilizantes'>Fertilizantes</Link>
                        </li>
                        <li>
                            <Link className='link' to='/category/Sustratos'>Sustratos</Link>
                        </li>
                        <li>
                            <Link className='link' to='/category/Más Categorias/'>Más Categorias</Link>
                        </li>
                    </ul>
                </div>
                {/* CONTACTO */}
                <div className='footer-contacto '>
                    <ul>
                        <li>
                            <div className='link'>
                                +54 11 558-5200
                            </div>
                        </li>
                        <li>
                            <a className='link' href="facebook.com">facebook</a>
                        </li>
                        <li>
                            <a className='link' href="instagram.com">instagram</a>
                        </li>
                        <li>
                            <a className='link' href="gmail.com">gmail</a>
                        </li>
                    </ul>
                </div>

                {/* MODO ADMIN  */}
                <div className='footer-admin'>
                    <Link to='/agregarProducto' className='link'> Agregar Producto</Link>
                </div>


            </div>



        </footer>
    )
}
