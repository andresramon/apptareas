import React, { useState } from 'react';
import { TaskCreate } from '../services/api';

interface TaskFormProps {
    onSubmit: (task: TaskCreate) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (titulo.trim()) {
            onSubmit({ titulo, descripcion: descripcion.trim() || undefined });
            setTitulo('');
            setDescripcion('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div className="form-group">
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Título de la tarea"
                    required
                />
            </div>
            <div className="form-group">
                <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Descripción (opcional)"
                    rows={3}
                />
            </div>
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default TaskForm;
