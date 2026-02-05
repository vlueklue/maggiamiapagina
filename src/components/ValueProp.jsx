import React from 'react';
import './ValueProp.css';

const ValueProp = () => {
    return (
        <section className="section value-prop" id="value-prop">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2>Reimaginando la Educación</h2>
                    <p className="subtitle">Deja atrás lo aburrido. Abraza lo mágico.</p>
                </div>

                <div className="comparison-grid">
                    <div className="card challenge-card">
                        <h3>El Desafío</h3>
                        <ul>
                            <li>📚 Memorización repetitiva y aburrida</li>
                            <li>😴 Falta de motivación y atención</li>
                            <li>🧩 Contenido estático y poco interactivo</li>
                            <li>⏳ Progreso lento y difícil de medir</li>
                        </ul>
                    </div>

                    <div className="vs-badge">VS</div>

                    <div className="card solution-card glass-card">
                        <h3>La Solución MaggiaMia</h3>
                        <ul>
                            <li>✨ Historias inmersivas y personalizadas</li>
                            <li>🚀 Gamificación que motiva a seguir</li>
                            <li>🎨 Arte visual que estimula la creatividad</li>
                            <li>📈 Aprendizaje adaptativo al ritmo del niño</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
