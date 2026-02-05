import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const TestimonialCard = ({ name, role, quote }) => (
    <div className="testimonial-card">
        <div className="stars">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
        </div>
        <p>"{quote}"</p>
        <div className="author">
            <h4>{name}</h4>
            <span>{role}</span>
        </div>
    </div>
);

const Testimonials = () => {
    const reviews = [
        {
            name: "Pili González",
            role: "Mamá de Lucas, 5 años",
            quote: "A mi peque no le enganchaban los libros, y con MaggiaMia fue un cambio total. Como puede ser el protagonista, ahora quiere leer todos los días. ¡Es mágico!"
        },
        {
            name: "Marta Herráiz",
            role: "Mamá de Emma, 7 años",
            quote: "Nos ha ayudado a hablar de emociones, miedos, incluso del primer día de cole. Es como tener una excusa bonita para abrir temas importantes sin forzar."
        },
        {
            name: "David Bouzas",
            role: "Papá de Sofía, 4 años",
            quote: "Lo mejor es que cada uno elige su propia idea y MaggiaMia la convierte en un cuento único. Siempre acabamos riéndonos y hablando de algo."
        },
        {
            name: "Ana Pascual",
            role: "Mamá de Hugo, 6 años",
            quote: "Ya forma parte de nuestra rutina: elegimos el cuento, lo escuchamos abrazados y a veces lo seguimos inventando juntos."
        }
    ];

    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2>Lo que dicen las familias que ya crean magia</h2>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((review, i) => (
                        <TestimonialCard key={i} {...review} />
                    ))}
                </div>

                <div className="stats-row">
                    <div className="stat-item">
                        <h3>4.8/5</h3>
                        <p>Estrellas promedio</p>
                    </div>
                    <div className="stat-item">
                        <h3>50,000+</h3>
                        <p>Familias felices</p>
                    </div>
                    <div className="stat-item">
                        <h3>200,000+</h3>
                        <p>Cuentos creados</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
