import React from 'react';
import { BookOpen, Palette, Volume2, ShieldCheck } from 'lucide-react';
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
            icon: BookOpen,
            title: "Historias Personalizadas",
            description: "Cuentos donde tu hijo es el protagonista, adaptados a sus gustos y nivel de lectura.",
            color: "#a0c4ff"
        },
        {
            icon: Palette,
            title: "Ilustraciones Mágicas",
            description: "Arte visual generado con IA que trae cada palabra a la vida con colores vibrantes.",
            color: "#ffc6ff"
        },
        {
            icon: Volume2,
            title: "Narración de Voz",
            description: "Voces cálidas y expresivas que leen las historias para una experiencia inmersiva.",
            color: "#bdb2ff"
        },
        {
            icon: ShieldCheck,
            title: "Seguro y Privado",
            description: "Un entorno 100% seguro, sin anuncios y enfocado únicamente en aprender.",
            color: "#fdffb6"
        }
    ];

    return (
        <section className="section features-section" id="features">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2>Por qué los padres aman MaggiaMia</h2>
                    <p className="subtitle">Herramientas diseñadas para potenciar la imaginación.</p>
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
