import React, { useState } from 'react';
import './SimpleForm.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        matricula: '',
        nombre: '',
        apellidos: '',
        edad: '',
        universidad: '',
        carrera: ''
    });

    const [submitted, setSubmitted] = useState(null);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(formState);
    };

    return (
        <form className="neumorph-form" onSubmit={onSubmit}>
            <div className="segment">
                <h1>Formulario Simple</h1>
            </div>
            <div className="form-row">
                <label>
                    <input
                        type="text"
                        name="matricula"
                        placeholder="Matricula"
                        value={formState.matricula}
                        onChange={onInputChange}
                        required
                    />
                </label>
                <label>
                    <input
                        type="number"
                        name="edad"
                        placeholder="Edad"
                        value={formState.edad}
                        onChange={onInputChange}
                        required
                    />
                </label>
            </div>
            <div className="form-row">
                <label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formState.nombre}
                        onChange={onInputChange}
                        required
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="apellidos"
                        placeholder="Apellidos"
                        value={formState.apellidos}
                        onChange={onInputChange}
                        required
                    />
                </label>
            </div>
            <div className="form-row">
                <label>
                    <input
                        type="text"
                        name="universidad"
                        placeholder="Universidad"
                        value={formState.universidad}
                        onChange={onInputChange}
                        required
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="carrera"
                        placeholder="Carrera"
                        value={formState.carrera}
                        onChange={onInputChange}
                        required
                    />
                </label>
            </div>
            <button className="red" type="submit">
                Enviar
            </button>
            {submitted && (
                <div className="alert-success">
                    <h4>Datos enviados:</h4>
                    <p><strong>Matricula:</strong> {submitted.matricula}</p>
                    <p><strong>Nombre:</strong> {submitted.nombre}</p>
                    <p><strong>Apellidos:</strong> {submitted.apellidos}</p>
                    <p><strong>Edad:</strong> {submitted.edad}</p>
                    <p><strong>Universidad:</strong> {submitted.universidad}</p>
                    <p><strong>Carrera:</strong> {submitted.carrera}</p>
                </div>
            )}
        </form>
    );
};

