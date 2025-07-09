import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { apiService, Task, TaskCreate, TaskUpdate } from './services/api';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const tasksData = await apiService.getTasks();
      setTasks(tasksData);
      setError(null);
    } catch (err) {
      setError('Error al cargar las tareas');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (task: TaskCreate) => {
    try {
      const newTask = await apiService.createTask(task);
      setTasks([...tasks, newTask]);
    } catch (err) {
      setError('Error al crear la tarea');
    }
  };

  const handleUpdateTask = async (id: number, taskUpdate: TaskUpdate) => {
    try {
      const updatedTask = await apiService.updateTask(id, taskUpdate);
      setTasks(tasks.map(task => task.id === id ? updatedTask : task));
    } catch (err) {
      setError('Error al actualizar la tarea');
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await apiService.deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Error al eliminar la tarea');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestor</h1>

        {error && <div className="error-message">{error}</div>}

        <div className="app-content">
          <div className="task-form-section">
            <h2>Nueva Tarea</h2>
            <TaskForm onSubmit={handleCreateTask} />
          </div>

          <div className="task-list-section">
            <h2>Mis Tareas</h2>
            {loading ? (
              <p>Cargando tareas...</p>
            ) : (
              <TaskList
                tasks={tasks}
                onUpdate={handleUpdateTask}
                onDelete={handleDeleteTask}
              />
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
