import React from 'react';
import { Lightbulb, UserPen, Heart, BookOpen } from 'lucide-react';
import './HowItWorks.css';

const StepCard = ({ number, title, description, icon: Icon, color }) => (
    <div className="step-card" style={{ '--step-color': color }}>
        <div className="step-circle">{number}</div>
        <div className="step-icon">
            <Icon size={40} color={color} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const HowItWorks = () => {
    return (
        <section className="section how-it-works" id="how-it-works">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2>¿Cómo Funciona?</h2>
                    <p className="subtitle">4 pasos simples para crear magia</p>
                </div>

                <div className="steps-grid">
                    <StepCard
                        number="1"
                        title="Crear Idea"
                        description="Escribe tu propia idea o elige de nuestra biblioteca de historias disponibles."
                        icon={Lightbulb}
                        color="#ffadad" /* Soft Red/Orange */
                    />
                    <StepCard
                        number="2"
                        title="Personalizar"
                        description="Añade el nombre del niño, su apariencia, edad y características especiales."
                        icon={UserPen}
                        color="#a0c4ff" /* Soft Blue */
                    />
                    <StepCard
                        number="3"
                        title="Valores"
                        description="Selecciona los valores educativos y temas que quieres transmitir."
                        icon={Heart}
                        color="#ffd6a5" /* Soft Yellow */
                    />
                    <StepCard
                        number="4"
                        title="¡Disfrutar!"
                        description="Genera y disfruta tu cuento ilustrado único en segundos."
                        icon={BookOpen}
                        color="#fdffb6" /* Another Soft Yellow/Orange */
                    />
                </div>

                <div className="time-note text-center mt-lg">
                    <p>⏱️ ¡Todo el proceso toma menos de <strong>2 minutos</strong>!</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
