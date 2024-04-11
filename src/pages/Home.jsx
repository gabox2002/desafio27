import React from 'react'
import images from '../components/images'


function Home() {
    return (
        <div className='home-container'>
            <h2>Bienvenido a nuestra plataforma de streaming</h2>
            <p>En nuestra plataforma, podrás disfrutar de una amplia variedad de películas de diversos géneros y épocas.</p>
            <p>Explora nuestro catálogo para encontrar tus películas favoritas o descubre nuevas joyas del cine.</p>
            <img src={images.image1} alt="Descripción de la imagen" />
            <p>¡Prepárate para sumergirte en el maravilloso mundo del cine con nosotros!</p>
        </div>
    );
}

export default Home;
