import React from 'react';
import './Benefits.css';

const Benefits = () => {
    return (
        <section className="section benefits-section">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2>Más que cuentos: Herramientas para el desarrollo de tu hijo</h2>
                    <p className="subtitle">Cada cuento de MaggiaMia está diseñado para nutrir el crecimiento emocional, cognitivo y social de tu pequeño.</p>
                </div>

                <div className="benefits-grid">
                    <div className="benefit-card">
                        <h3>🧠 Desarrollo Cognitivo</h3>
                        <ul>
                            <li>Mejora comprensión lectora en un 85%</li>
                            <li>Expande vocabulario significativamente</li>
                            <li>Desarrolla pensamiento crítico desde temprana edad</li>
                        </ul>
                    </div>
                    <div className="benefit-card">
                        <h3>✨ Creatividad e Imaginación</h3>
                        <ul>
                            <li>Estimula la imaginación al máximo</li>
                            <li>Fomenta el pensamiento creativo</li>
                            <li>Inspira a los niños a crear sus propias historias</li>
                        </ul>
                    </div>
                    <div className="benefit-card">
                        <h3>❤️ Inteligencia Emocional</h3>
                        <ul>
                            <li>Fortalece la autoestima al verse como héroe</li>
                            <li>Desarrolla autoconocimiento</li>
                            <li>Mejora la regulación emocional</li>
                        </ul>
                    </div>
                    <div className="benefit-card">
                        <h3>🤝 Empatía y Habilidades Sociales</h3>
                        <ul>
                            <li>40% más de empatía en interacciones sociales</li>
                            <li>Mayor comprensión de emociones propias y ajenas</li>
                            <li>Aprende a ponerse en el lugar de otros</li>
                        </ul>
                    </div>
                </div>

                <div className="benefit-callout">
                    <p>
                        <strong>Dato destacado:</strong> Los niños que leen cuentos personalizados muestran un <strong>85% más de atención</strong> y retienen información por más tiempo. Se convierten en lectores entusiastas.
                    </p>
                </div>

                <div className="benefit-callout problem-context" style={{ marginTop: '2rem', background: '#fff0f3', borderLeftColor: '#ff4d6d' }}>
                    <h4 style={{ marginBottom: '1rem', color: '#590d22', fontSize: '1.2rem' }}>¿Te suena familiar?</h4>
                    <p>
                        Tu pequeño prefiere las pantallas a los libros... No estás solo. <strong>El 67% de los niños</strong> ha perdido el interés por la lectura tradicional. MaggiaMia existe para cambiar esto.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
