import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function Footer() {
    return (
        <footer className='footer' >
            <div className='footer-container'>
                {/* CATEGORIAS  */}
                <div className='footer-categorias '>
                    <ul>
                        <li>
                            <Link className='linkFooter' to='/'>Inicio</Link>
                        </li>
                        <li>
                            <Link className='linkFooter' to='/category/Invernaderos y Carpas'>Invernaderos y Carpas</Link>
                        </li>
                        <li>
                            <Link className='linkFooter' to='/category/Luces de cultivo'>Luces de cultivo</Link>
                        </li>
                        <li>
                            <Link className='linkFooter' to='/category/Fertilizantes'>Fertilizantes</Link>
                        </li>
                        <li>
                            <Link className='linkFooter' to='/category/Sustratos'>Sustratos</Link>
                        </li>
                        <li>
                            <Link className='linkFooter' to='/category/Más Categorias/'>Más Categorias</Link>
                        </li>
                    </ul>
                </div>
                {/* CONTACTO */}
                <div className='footer-contacto '>
                    <ul>
                        <li>
                            <div className='linkFooter'>
                                <LocalPhoneIcon /> +54 11 558-5200
                            </div>
                        </li>
                        <li>
                            <a className='linkFooter' href="www.facebook.com"> <FacebookIcon /> Facebook</a>
                        </li>
                        <li>
                            <a className='linkFooter' href="www.instagram.com"> <InstagramIcon /> Instagram</a>
                        </li>
                        <li className='linkFooter'>
                            <EmailIcon /> Growshop@growshop.com
                        </li>
                    </ul>
                </div>

                {/* MODO ADMIN  */}
                <div className='footer-admin'>
                    <Link to='/agregarProducto' className='linkFooter'> Agregar Producto</Link>
                </div>


            </div>



        </footer>
    )
}
