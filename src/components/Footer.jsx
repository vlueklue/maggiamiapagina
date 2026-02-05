import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>MaggiaMia</h3>
                        <p>Donde la imaginación cobra vida. Cuentos mágicos para niños soñadores.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Explora</h4>
                        <ul>
                            <li><a href="#hero">Inicio</a></li>
                            <li><a href="#features">Funcionalidades</a></li>
                            <li><a href="#pricing">Precios</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacidad</a></li>
                            <li><a href="#">Términos</a></li>
                            <li><a href="#">Ayuda</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Síguenos</h4>
                        <div className="social-icons">
                            <a href="#"><Facebook size={24} /></a>
                            <a href="#"><Twitter size={24} /></a>
                            <a href="#"><Instagram size={24} /></a>
                        </div>
                        <a href="mailto:hola@maggiamia.com" className="email-link">
                            <Mail size={16} /> hola@maggiamia.com
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} MaggiaMia. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
