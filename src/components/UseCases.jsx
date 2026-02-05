import React from 'react';
import './UseCases.css';

const UseCases = () => {
    const cases = [
        {
            emoji: "🌙",
            title: "Rutina de Lectura Nocturna",
            desc: "Transforma la hora de dormir en un ritual especial. Cuentos donde tu hijo es el héroe que vence miedos y aprende lecciones valiosas."
        },
        {
            emoji: "😌",
            title: "Calma Sin Pantallas",
            desc: "Los audiocuentos permiten disfrutar historias sin mirar la pantalla. Perfectos para descansar los ojos y relajar la mente."
        },
        {
            emoji: "💬",
            title: "Abordar Temas Difíciles",
            desc: "¿Primer día de escuela? ¿Llegada de un hermanito? Usa cuentos para hablar de forma natural sobre los desafíos de crecer."
        },
        {
            emoji: "🎁",
            title: "Regalos Únicos",
            desc: "Un cuento personalizado es el regalo más especial para cumpleaños, navidad o cualquier celebración."
        },
        {
            emoji: "👨‍👩‍👧",
            title: "Actividad Familiar",
            desc: "Crear cuentos juntos fortalece los lazos familiares. Imaginen, rían y conecten mientras dan vida a historias únicas."
        },
        {
            emoji: "✈️",
            title: "Entretenimiento en Movimiento",
            desc: "Viajes largos, esperas en el médico, momentos de aburrimiento... MaggiaMia convierte cualquier momento en mágico."
        }
    ];

    return (
        <section className="section use-cases-section">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2>Momentos mágicos para cada ocasión</h2>
                </div>
                <div className="use-cases-grid">
                    {cases.map((item, index) => (
                        <div className="case-card" key={index}>
                            <div className="case-emoji">{item.emoji}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
