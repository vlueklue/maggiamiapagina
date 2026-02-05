import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h4>{question}</h4>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </div>
            {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "¿Cómo funciona la prueba gratuita?",
            answer: "Tienes 7 días para explorar todas las funciones del Plan PRO sin costo alguno. Si decides continuar, el cobro se realizará automáticamente. Puedes cancelar en cualquier momento."
        },
        {
            question: "¿Puedo crear cuentos para varios niños?",
            answer: "¡Sí! Con una sola suscripción puedes crear cuentos personalizados para todos los niños de tu familia."
        },
        {
            question: "¿Los cuentos son apropiados para todas las edades?",
            answer: "Nuestros cuentos están diseñados para niños de 3 a 10 años. El sistema adapta el lenguaje, la complejidad de la trama y los temas según la edad que indiques."
        },
        {
            question: "¿Qué valores puedo enseñar con los cuentos?",
            answer: "Puedes elegir entre más de 15 valores: empatía, coraje, autoestima, respeto, honestidad, perseverancia, amistad, generosidad, responsabilidad, paciencia, gratitud y muchos más."
        },
        {
            question: "¿Puedo imprimir los cuentos?",
            answer: "Con el Plan ULTRA puedes descargar todos tus cuentos en PDF de alta calidad para imprimir. El Plan PRO no incluye esta función."
        },
        {
            question: "¿Funcionan los cuentos sin conexión?",
            answer: "Una vez generado un cuento, se guarda en tu biblioteca y puedes acceder a él sin conexión a internet desde la app."
        },
        {
            question: "¿Puedo cancelar mi suscripción?",
            answer: "Sí, puedes cancelar en cualquier momento desde la configuración de tu cuenta. No hay penalidades ni periodos de permanencia obligatorios."
        }
    ];

    return (
        <section className="section faq-section">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2>Preguntas Frecuentes</h2>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
