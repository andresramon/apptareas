const API_BASE_URL = 'http://localhost:8000';

export interface Task {
    id: number;
    titulo: string;
    descripcion?: string;
}

export interface TaskCreate {
    titulo: string;
    descripcion?: string;
}

export interface TaskUpdate {
    titulo?: string;
    descripcion?: string;
}

class ApiService {
    async getTasks(): Promise<Task[]> {
        const response = await fetch(`${API_BASE_URL}/tasks/`);
        if (!response.ok) throw new Error('Failed to fetch tasks');
        return response.json();
    }

    async createTask(task: TaskCreate): Promise<Task> {
        const response = await fetch(`${API_BASE_URL}/tasks/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
        });
        if (!response.ok) throw new Error('Failed to create task');
        return response.json();
    }

    async updateTask(id: number, task: TaskUpdate): Promise<Task> {
        const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
        });
        if (!response.ok) throw new Error('Failed to update task');
        return response.json();
    }

    async deleteTask(id: number): Promise<void> {
        const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete task');
    }
}

export const apiService = new ApiService();
