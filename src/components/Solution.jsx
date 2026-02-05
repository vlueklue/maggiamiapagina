import React from 'react';
import { Star, Heart, Zap } from 'lucide-react';
import './Solution.css';

const Solution = () => {
    return (
        <section className="section solution-section">
            <div className="container">
                <div className="text-center mb-lg">
                    <h2>MaggiaMia</h2>
                    <p className="subtitle">
                        MaggiaMia transforma la lectura en una aventura personal. En menos de 2 minutos, creas cuentos completamente personalizados donde tu hijo es el protagonista, aprende valores que tú eliges, y vive historias que querrá escuchar una y otra vez.
                    </p>
                </div>

                <div className="solution-grid">
                    <div className="solution-card">
                        <div className="icon-box color-1">
                            <Star size={32} />
                        </div>
                        <h3>Personalización Total</h3>
                        <p>
                            El nombre, apariencia y características de tu hijo son el corazón de cada historia. Así se verá reflejado y conectará profundamente con la lectura.
                        </p>
                    </div>

                    <div className="solution-card">
                        <div className="icon-box color-2">
                            <Heart size={32} />
                        </div>
                        <h3>Valores que Importan</h3>
                        <p>
                            Tú decides qué enseñar: empatía, coraje, autoestima, respeto... Cada cuento transmite las lecciones que consideras importantes.
                        </p>
                    </div>

                    <div className="solution-card">
                        <div className="icon-box color-3">
                            <Zap size={32} />
                        </div>
                        <h3>Rápido y Fácil</h3>
                        <p>
                            En 2 minutos pasas de una idea a un cuento ilustrado completo. Sin complicaciones, sin horas de preparación. Solo magia instantánea.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
