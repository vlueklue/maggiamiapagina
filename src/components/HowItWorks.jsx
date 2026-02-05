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
                        title="Crea tu idea"
                        description="Escribe lo que quieras contar o elige de nuestra biblioteca con cientos de historias listas para personalizar."
                    />
                    <Step
                        number="2"
                        title="Personaliza"
                        description="Añade el nombre de tu hijo, su edad, apariencia y características especiales. Aquí es donde la magia comienza."
                        reverse={true}
                    />
                    <Step
                        number="3"
                        title="Elige valores"
                        description="Selecciona qué quieres que aprenda: valentía, amistad, honestidad, perseverancia... Tú decides el mensaje."
                    />
                    <Step
                        number="4"
                        title="¡Disfruta!"
                        description="En segundos tendrás un cuento ilustrado único. Léelo juntos, escúchalo como audiocuento o imprímelo."
                        reverse={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
