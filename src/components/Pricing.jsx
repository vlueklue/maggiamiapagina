import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const PricingCard = ({ title, price, period, features, highlighted, buttonText }) => (
    <div className={`pricing-card ${highlighted ? 'highlighted' : ''}`}>
        {highlighted && <div className="popular-tag">Más Popular</div>}
        <h3>{title}</h3>
        <div className="price">
            <span className="currency">$</span>
            <span className="amount">{price}</span>
            <span className="period">/{period}</span>
        </div>
        <ul className="pricing-features">
            {features.map((feat, i) => (
                <li key={i}>
                    <Check size={18} className="check-icon" /> {feat}
                </li>
            ))}
        </ul>
        <button className={`btn-pricing ${highlighted ? 'btn-highlight' : 'btn-outline'}`}>
            {buttonText}
        </button>
    </div>
);

const Pricing = () => {
    const [annual, setAnnual] = useState(true);

    return (
        <section className="section pricing" id="pricing">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2>Planes Mágicos</h2>
                    <p className="subtitle">Invierte en la creatividad de tus hijos.</p>

                    <div className="toggle-container">
                        <span className={!annual ? 'active' : ''}>Mensual</span>
                        <button
                            className={`toggle-btn ${annual ? 'active' : ''}`}
                            onClick={() => setAnnual(!annual)}
                        >
                            <div className="toggle-circle"></div>
                        </button>
                        <span className={annual ? 'active' : ''}>Anual <span className="save-tag">-20%</span></span>
                    </div>
                </div>

                <div className="pricing-grid">
                    <PricingCard
                        title="Explorador"
                        price="0"
                        period="mes"
                        features={[
                            "1 Historia Gratis al día",
                            "Ilustraciones básicas",
                            "Acceso web"
                        ]}
                        buttonText="Comenzar Gratis"
                    />
                    <PricingCard
                        title="Mago Supremo"
                        price={annual ? "9.99" : "12.99"}
                        period={annual ? "mes" : "mes"}
                        features={[
                            "Historias Ilimitadas",
                            "Ilustraciones HD y Estilos",
                            "Narración de voz Premium",
                            "Sin conexión (App móvil)",
                            "Seguimiento de progreso"
                        ]}
                        highlighted={true}
                        buttonText="Prueba Gratuita de 7 Días"
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
