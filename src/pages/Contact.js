import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BannerContact from '../Components/BannerContact';
import Form from '../Components/Form';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <BannerContact
                heading='Contacto'
                text='Tienes alguna pregunta? Habla con nosotros.'
            />
            <Form />
            <Footer />
        </div>
    )
};

export default Contact
