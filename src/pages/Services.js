import React from 'react'
import BannerImg from '../Components/BannerImg'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Services = () => {
    return (
        <div>
            <Navbar />
            <BannerImg
                heading='Servicios'
                text='Los Servicios que ofrecemos'
            />
            <Cards />
            <Footer />
        </div>
    )
}

export default Services