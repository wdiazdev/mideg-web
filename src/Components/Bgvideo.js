import React from 'react';
import { Link } from 'react-router-dom';
import techvideo from '../assets/techvideo.mp4';

const Bgvideo = () => {
    return (
        <div className='video--container'>
            <video autoPlay loop muted id='video'>
                <source src={techvideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>MIDEG Solutions.</h1>
                <p>CONSULTORIA E IMPLEMENTACION DE SISTEMAS DE
                    INFRAESTRUCTURA TECNOLOGICA Y SEGURIDAD.</p>
            </div>
            <div className='btn-main'>
                <Link to='/services' className='btn'>Servicios</Link>
                <Link to='/contact' className='btn'>Contacto</Link>
            </div>
        </div>
    )
};

export default Bgvideo