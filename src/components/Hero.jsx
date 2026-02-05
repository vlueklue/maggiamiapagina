import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero-fantasy.jpg';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>La maggia es tuya</h1>
                    <p>
                        Crea cuentos infantiles únicos y personalizados en minutos. Tu hijo será el héroe, aprenderá valores importantes y querrá leer una y otra vez.
                    </p>
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
