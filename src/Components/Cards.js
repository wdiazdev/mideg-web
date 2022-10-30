import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faShieldHalved, faServer, faLaptop } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {
    return (
        <div className='card--container'>
            <div className="card">

                <div className='card--hero'>
                    <FontAwesomeIcon icon={faGlobe} className='footer--icon card--icon' />
                    <h2 className='title'>Network</h2>
                    <div className='card--content'>
                        <h3>Network</h3>
                        <p>Ofrecemos servicios de:</p>
                        <ul>
                            <li>CABLEADO ESTRUCTURADO</li>
                            <li>ADMINISTRACION DE RED E INFRAESTRUCTURA</li>
                            <li>DISEÑO DE DATA CENTERS</li>
                            <li>DISEÑO DE REDES</li>
                            <li>SOLUCIONES WIRELESS</li>
                            <li>CENTRALES TELEFONICAS IP</li>
                            <li>SISTEMAS INTEGRADOS</li>
                        </ul>
                        <div className='card--button'>
                            <Link to='/contact' className='btn'>Contacto</Link>
                        </div>
                    </div>
                </div>

                <div className='card--hero'>
                    <FontAwesomeIcon icon={faShieldHalved} className='footer--icon card--icon' />
                    <h2 className='title'>Sistemas de Seguridad</h2>
                    <div className='card--content'>
                        <h3>Sistemas de Seguridad</h3>
                        <p>Ofrecemos servicios de:</p>
                        <ul>
                            <li>CIRCUITOS CCTV & IP</li>
                            <li>SISTEMAS DE ALARMA</li>
                            <li>SISTEMAS CONTRA INCENDIOS</li>
                            <li>CERCADO ELECTRICO</li>
                            <li>CONTROL DE ACCESO</li>
                            <li>CONTROL DE ASISTENCIA</li>
                        </ul>
                        <div className='card--button'>
                            <Link to='/contact' className='btn'>Contacto</Link>
                        </div>
                    </div>
                </div>

                <div className='card--hero'>
                    <FontAwesomeIcon icon={faServer} className='footer--icon card--icon' />
                    <h2 className='title'>Consultorias</h2>
                    <div className='card--content'>
                        <h3>Consultorias</h3>
                        <p>Ofrecemos servicios de:</p>
                        <ul>
                            <li>ADMINISTRACION DE HOSTING</li>
                            <li>ADMINISTRACION DE INFRAESTRUCTURA A TERCEROS</li>
                            <li>CONSULTORIA GENERAL</li>
                            <li>ADMINISTRACION DE DATA CENTERS</li>
                        </ul>
                        <div className='card--button'>
                            <Link to='/contact' className='btn'>Contacto</Link>
                        </div>
                    </div>
                </div>

                <div className='card--hero'>
                    <FontAwesomeIcon icon={faLaptop} className='footer--icon card--icon' />
                    <h2 className='title'>Ventas</h2>
                    <div className='card--content'>
                        <h3>Ventas</h3>
                        <p>Ofrecemos servicios de:</p>
                        <ul>
                            <li>LICENCIAMIENTO</li>
                            <li>LAPTOPS</li>
                            <li>TELEFONOS SIP</li>
                            <li>SERVIDORES</li>
                            <li>ACCESS POINTS</li>
                            <li>IMPRESORAS</li>
                            <li>DESKTOPS</li>
                            <li>CENTRALES TELEFONIC</li>
                        </ul>
                        <div className='card--button'>
                            <Link to='/contact' className='btn'>Contacto</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards