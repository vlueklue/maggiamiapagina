import React from 'react';
import { BookOpen, Palette, Volume2, ShieldCheck, Zap, Star, User, Clock } from 'lucide-react';
import './Features.css';

const FeatureCard = ({ icon: Icon, title, description, color }) => (
    <div className="feature-card glass-card" style={{ '--feature-color': color }}>
        <div className="icon-wrapper">
            <Icon size={32} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const Features = () => {
    const features = [
        {
            icon: User,
            title: "Personalización Total",
            description: "El nombre, apariencia y características de tu hijo son el corazón de cada historia. Así se verá reflejado y conectará profundamente con la lectura.",
            color: "#ffadad" /* Soft Red */
        },
        {
            icon: Zap,
            title: "Rápido y Fácil",
            description: "En 2 minutos pasas de una idea a un cuento ilustrado completo. Sin complicaciones, sin horas de preparación. Solo magia instantánea.",
            color: "#cb997e" /* Muted Earthy? or #fee440 (Yellow) from palette */
        },
        {
            icon: BookOpen,
            title: "Cuentos Ilustrados",
            description: "Historias completas con ilustraciones mágicas diseñadas específicamente para cada cuento.",
            color: "#a0c4ff"
        },
        {
            icon: Volume2,
            title: "Audiocuentos",
            description: "Escucha las historias sin pantallas. Perfecto para la hora de dormir o momentos de calma.",
            color: "#bdb2ff"
        },
        {
            icon: Palette,
            title: "Biblioteca Personal",
            description: "Todos tus cuentos guardados en un solo lugar. Accede cuando quieras, donde quieras.",
            color: "#ffc6ff"
        },
        {
            icon: ShieldCheck,
            title: "Impresión PDF",
            description: "Descarga e imprime los cuentos para leerlos abrazados, como antes, como siempre.",
            color: "#fdffb6"
        },
        {
            icon: Clock, /* Changed from Zap to avoid duplicate */
            title: "Adaptado por Edad",
            description: "Contenido diseñado específicamente para edades 3-10 años con lenguaje y trama apropiados.",
            color: "#caffbf"
        },
        {
            icon: Star,
            title: "Valores Educativos",
            description: "Elige entre más de 15 valores diferentes para tejer en cada historia: empatía, coraje, etc.",
            color: "#ffd6a5"
        }
    ];

    return (
        <section className="section features-section" id="features">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2>Todo lo que necesitas para crear momentos inolvidables</h2>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
