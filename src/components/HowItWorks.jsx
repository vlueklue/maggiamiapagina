import React from 'react';
import './HowItWorks.css';

const Step = ({ number, title, description, reverse }) => (
    <div className={`step-item ${reverse ? 'reverse' : ''}`}>
        <div className="step-content">
            <div className="step-number">{number}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className="step-visual">
            {/* Placeholder for visual or illustration */}
            <div className="visual-placeholder"></div>
        </div>
    </div>
);

const HowItWorks = () => {
    return (
        <section className="section how-it-works" id="how-it-works">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2>Tu Aventura en 4 Pasos</h2>
                    <p className="subtitle">Así de fácil crean magia nuestros pequeños magos.</p>
                </div>

                <div className="steps-container">
                    <Step
                        number="1"
                        title="Crea tu Perfil Mágico"
                        description="Elige tu avatar y cuéntanos qué te gusta. ¡Dragones, espacio o dinosaurios!"
                    />
                    <Step
                        number="2"
                        title="Elige un Tema"
                        description="Selecciona una temática o deja que la varita mágica sorprenda a tu imaginación."
                        reverse={true}
                    />
                    <Step
                        number="3"
                        title="Deja que la IA Cree"
                        description="En segundos, generamos una historia única con ilustraciones increíbles solo para ti."
                    />
                    <Step
                        number="4"
                        title="¡A Leer y Soñar!"
                        description="Lee la historia, escucha la narración y completa divertidos quizzes al final."
                        reverse={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
