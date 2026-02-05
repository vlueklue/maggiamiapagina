import React from 'react';
import './Problem.css';

const Problem = () => {
    return (
        <section className="section problem-section">
            <div className="container">
                <div className="problem-content text-center">
                    <div className="problem-header">
                        <h2>¿Te suena familiar?</h2>
                    </div>
                    <div className="problem-body">
                        <p>
                            Tu pequeño prefiere las pantallas a los libros. Los cuentos tradicionales pierden su atención después de unos minutos.
                            Quieres leerle todas las noches pero llegas cansado del trabajo y con poca energía para inventar historias.
                        </p>
                        <div className="problem-callout">
                            <p className="problem-stat">
                                No estás solo. <strong>El 67% de los niños</strong> entre 5-10 años ha perdido el interés por la lectura tradicional,
                                y las familias pasan solo <strong>37 minutos de calidad juntas al día</strong>.
                            </p>
                        </div>
                        <p className="problem-question">
                            ¿Y si pudieras cambiar eso con solo unos clics?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
