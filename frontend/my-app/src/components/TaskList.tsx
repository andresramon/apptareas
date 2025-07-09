import React, { useState } from 'react';
import { Task, TaskUpdate } from '../services/api';

interface TaskListProps {
    tasks: Task[];
    onUpdate: (id: number, task: TaskUpdate) => void;
    onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdate, onDelete }) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editTitulo, setEditTitulo] = useState('');
    const [editDescripcion, setEditDescripcion] = useState('');

    const handleEdit = (task: Task) => {
        setEditingId(task.id);
        setEditTitulo(task.titulo);
        setEditDescripcion(task.descripcion || '');
    };

    const handleSave = () => {
        if (editingId && editTitulo.trim()) {
            onUpdate(editingId, {
                titulo: editTitulo,
                descripcion: editDescripcion.trim() || undefined,
            });
            setEditingId(null);
        }
    };

    const handleCancel = () => {
        setEditingId(null);
        setEditTitulo('');
        setEditDescripcion('');
    };

    if (tasks.length === 0) {
        return <p className="no-tasks">No hay tareas disponibles</p>;
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div key={task.id} className="task-item">
                    {editingId === task.id ? (
                        <div className="task-edit">
                            <input
                                type="text"
                                value={editTitulo}
                                onChange={(e) => setEditTitulo(e.target.value)}
                            />
                            <textarea
                                value={editDescripcion}
                                onChange={(e) => setEditDescripcion(e.target.value)}
                                rows={2}
                            />
                            <div className="task-actions">
                                <button onClick={handleSave}>Guardar</button>
                                <button onClick={handleCancel}>Cancelar</button>
                            </div>
                        </div>
                    ) : (
                        <div className="task-display">
                            <h3>{task.titulo}</h3>
                            {task.descripcion && <p>{task.descripcion}</p>}
                            <div className="task-actions">
                                <button onClick={() => handleEdit(task)}>Editar</button>
                                <button onClick={() => onDelete(task.id)}>Eliminar</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TaskList;
