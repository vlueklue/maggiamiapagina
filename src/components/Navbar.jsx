import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="logo">
                    <span>MaggiaMia</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#hero">Inicio</a></li>
                    <li><a href="#features">Funcionalidades</a></li>
                    <li><a href="#how-it-works">Cómo Funciona</a></li>
                    <li><a href="#pricing">Precios</a></li>
                </ul>
                <button className="btn-app-access">
                    Acceder a la App
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
