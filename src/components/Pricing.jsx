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
                    <h2>Elige el plan perfecto para tu familia</h2>
                    <p className="subtitle">Cancela cuando quieras, sin compromisos.</p>

                    <div className="toggle-container">
                        <span className={!annual ? 'active' : ''}>Mensual</span>
                        <button
                            className={`toggle-btn ${annual ? 'active' : ''}`}
                            onClick={() => setAnnual(!annual)}
                        >
                            <div className="toggle-circle"></div>
                        </button>
                        <span className={annual ? 'active' : ''}>Anual <span className="save-tag">-20% + 2 meses gratis</span></span>
                    </div>
                </div>

                <div className="pricing-grid">
                    <PricingCard
                        title="Plan PRO"
                        price={annual ? "7.99" : "9.99"}
                        period="mes"
                        features={[
                            "Cuentos ilustrados ilimitados",
                            "Biblioteca ilimitada",
                            "10 cuentos nuevos/mes",
                            "Personalización completa",
                            "Selección de valores",
                            "Adaptación por edad (3-10)"
                        ]}
                        buttonText="Comenzar Plan PRO"
                    />
                    <PricingCard
                        title="Plan ULTRA"
                        price={annual ? "11.99" : "14.99"}
                        period="mes"
                        features={[
                            "Todo lo del Plan PRO",
                            "Audiocuentos ilimitados",
                            "Impresión PDF sin límite",
                            "Historias con animación",
                            "Acceso prioritario",
                            "20 cuentos nuevos/mes",
                            "Soporte 24/7"
                        ]}
                        highlighted={true}
                        buttonText="Comenzar Plan ULTRA"
                    />
                </div>

                <div className="pricing-guarantee text-center mt-lg">
                    <p>✓ Cancela cuando quieras &nbsp; • &nbsp; ✓ Garantía de 30 días &nbsp; • &nbsp; ✓ Pago 100% seguro</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
