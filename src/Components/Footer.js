import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer--container'>
                <div className='left'>

                    <div className='footer--content'>
                        <FontAwesomeIcon icon={faLocationDot} className='footer--icon' />
                        <div>
                            <p>Calle primera #8, Altos De Arroyo Hondo 1</p>
                            <h4>Santo Domingo, Rep. Dom.</h4>
                        </div>
                    </div>

                    <div className='footer--content'>
                        <FontAwesomeIcon icon={faPhone} className='footer--icon' />
                        <h4>829-715-8493</h4>
                    </div>

                    <div className='footer--content'>
                        <FontAwesomeIcon icon={faEnvelope} className='footer--icon' />
                        <h4>info@midegsolutions.com</h4>
                    </div>

                </div>

                <div className='right'>
                    <h4>About the company</h4>
                    <p>Nos caracterizamos por contar con un equipo de
                        profesionales de amplia experiencia en los sectores
                        que incidimos. ofrecemos infraestructuras y
                        soluciones optimas para garantizar cada uno de los
                        servicios prestamos a nivel nacional e
                        internacional.</p>

                    <p>nuestra filosofia de negocio es disenar soluciones
                        que se ajusten a tus necesidades, contando con un
                        excelente servicio de implementacion, atencion al
                        cliente y buenas relaciones.</p>

                    <a href='https://www.linkedin.com'>
                        <FontAwesomeIcon icon={faGlobe} className='footer--icon' />
                    </a>
                </div>

            </div>
        </div>
    )
};

export default Footer