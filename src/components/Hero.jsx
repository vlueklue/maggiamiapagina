import React from 'react';
import './Hero.css';
import heroImg from '../assets/uploaded_media_0_1770309599418.jpg';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>Descubre la Magia de Aprender</h1>
                    <p>
                        MaggiaMia transforma el aprendizaje en una aventura mágica.
                        Donde la curiosidad se encuentra con la creatividad.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary">Empieza Ahora</button>
                        <button className="btn-secondary">Saber Más</button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src={heroImg} alt="Niños leyendo mágicamente" />
                    </div>
                </div>
            </div>
            <div className="hero-clouds"></div>
        </section>
    );
};

export default Hero;
