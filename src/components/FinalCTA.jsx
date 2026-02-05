import React from 'react';
import './FinalCTA.css';

const FinalCTA = () => {
    return (
        <section className="section final-cta-section">
            <div className="container text-center">
                <h2>Comienza la aventura hoy</h2>
                <p className="cta-subtitle">Descarga MaggiaMia y crea el primer cuento mágico para tu pequeño.</p>
                <p className="cta-highlight">Prueba gratuita de 7 días del Plan PRO incluida.</p>

                <div className="cta-actions">
                    <button className="btn-store apple">
                        <span className="icon">🍎</span> Descargar en App Store
                    </button>
                    <button className="btn-store google">
                        <span className="icon">🤖</span> Descargar en Google Play
                    </button>
                </div>

                <p className="cta-footer-text">Porque cada niño merece ser el héroe de su propia historia.</p>
            </div>
        </section>
    );
};

export default FinalCTA;
