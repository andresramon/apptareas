# Aplicación de Gestión de Tareas

Una aplicación web full-stack para la gestión de tareas desarrollada con tecnologías modernas.

## 🚀 Tecnologías Utilizadas

- **Frontend:** React 19.1.0 + TypeScript
- **Backend:** FastAPI (Python)
- **Base de Datos:** PostgreSQL 16
- **Orquestación:** Docker Compose
- **Estilos:** CSS3 personalizado

## 📁 Estructura del Proyecto

```
apptareas/
├── backend/
│   ├── main.py              # Aplicación FastAPI principal
│   ├── database.py          # Configuración de base de datos y modelos
│   ├── crud.py              # Operaciones CRUD
│   ├── schemas.py           # Esquemas Pydantic
│   ├── requirements.txt     # Dependencias Python
│   └── Dockerfile          # Imagen Docker del backend
├── frontend/
│   └── my-app/
│       ├── src/
│       │   ├── App.tsx             # Componente principal
│       │   ├── App.css             # Estilos principales
│       │   ├── index.css           # Estilos globales
│       │   ├── components/
│       │   │   ├── TaskForm.tsx    # Formulario para crear tareas
│       │   │   └── TaskList.tsx    # Lista de tareas
│       │   └── services/
│       │       └── api.ts          # Cliente API para comunicación con backend
│       ├── package.json            # Dependencias Node.js
│       ├── tsconfig.json           # Configuración TypeScript
│       └── Dockerfile              # Imagen Docker del frontend
├── docker-compose.yml              # Orquestación de servicios
└── README.md                       # Este archivo
```

## ⚙️ Funcionalidades

### Backend (FastAPI)

- **API RESTful** con endpoints para gestión completa de tareas
- **Base de datos PostgreSQL** con SQLAlchemy ORM
- **Validación de datos** con Pydantic
- **CORS habilitado** para comunicación con frontend
- **Dockerizado** para fácil despliegue

#### Endpoints Disponibles:

- `GET /` - Verificación del estado del servidor
- `POST /tasks/` - Crear nueva tarea
- `GET /tasks/` - Obtener todas las tareas
- `GET /tasks/{id}` - Obtener tarea específica
- `PUT /tasks/{id}` - Actualizar tarea existente
- `DELETE /tasks/{id}` - Eliminar tarea

### Frontend (React + TypeScript)

- **Interfaz moderna** con React 19 y TypeScript
- **Gestión de estado** con React Hooks
- **Componentes reutilizables** (TaskForm, TaskList)
- **Comunicación con API** mediante servicio centralizado
- **Edición inline** de tareas
- **Diseño responsivo** con CSS Grid

#### Componentes Principales:

- **App.tsx:** Componente principal que maneja el estado global
- **TaskForm.tsx:** Formulario para crear nuevas tareas
- **TaskList.tsx:** Lista de tareas con funcionalidad de edición y eliminación
- **api.ts:** Servicio para comunicación con el backend

### Base de Datos

- **PostgreSQL 16** como sistema de gestión de base de datos
- **Modelo de datos simple:**
  - `id`: Identificador único (Primary Key)
  - `titulo`: Título de la tarea (String, requerido)
  - `descripcion`: Descripción opcional (Text, opcional)

## 🛠️ Instalación y Configuración

### Prerrequisitos

- [Docker](https://www.docker.com/products/docker-desktop) instalado
- Docker Compose instalado

### Ejecución con Docker (Recomendado)

1. Clona el repositorio:
   ```bash
   git clone <url-repositorio>
   cd apptareas
   ```

2. Ejecuta la aplicación completa:
   ```bash
   docker-compose up --build
   ```

3. Accede a los servicios:
   - **Frontend:** [http://localhost:3000](http://localhost:3000)
   - **Backend:** [http://localhost:8000](http://localhost:8000)
   - **API Docs:** [http://localhost:8000/docs](http://localhost:8000/docs)
   - **PostgreSQL:** localhost:5432
     - Usuario: `todo_user`
     - Contraseña: `todo_pass`
     - Base de datos: `todo_db`

### Desarrollo Local

#### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

#### Frontend

```bash
cd frontend/my-app
npm install
npm start
```

## 🔧 Configuración de Desarrollo

### Variables de Entorno

#### Backend
- `DATABASE_URL`: URL de conexión a PostgreSQL
  - Por defecto: `postgresql://todo_user:todo_pass@localhost:5432/todo_db`

#### Frontend
- `CHOKIDAR_USEPOLLING`: Habilitado para hot-reload en Docker
- `WATCHPACK_POLLING`: Habilitado para detección de cambios
- `FAST_REFRESH`: Habilitado para recarga rápida

### Puertos Utilizados

- **3000:** Frontend React
- **8000:** Backend FastAPI
- **5432:** Base de datos PostgreSQL

## 📚 Uso de la Aplicación

### Crear Tarea
1. Ingresa el título de la tarea (obligatorio)
2. Opcionalmente, añade una descripción
3. Haz clic en "Agregar Tarea"

### Editar Tarea
1. Haz clic en "Editar" en cualquier tarea
2. Modifica el título y/o descripción
3. Guarda los cambios o cancela la edición

### Eliminar Tarea
1. Haz clic en "Eliminar" en cualquier tarea
2. La tarea se eliminará inmediatamente

## 🎨 Características de UI/UX

- **Diseño oscuro** con esquema de colores moderno
- **Layout responsivo** que se adapta a diferentes tamaños de pantalla
- **Feedback visual** para operaciones exitosas y errores
- **Animaciones suaves** para mejor experiencia de usuario
- **Formularios intuitivos** con validación en tiempo real

## 🔄 Flujo de Datos

1. **Usuario interactúa** con el frontend React
2. **Frontend envía petición** al backend FastAPI
3. **Backend procesa** la petición y consulta/modifica la base de datos
4. **Backend devuelve** respuesta JSON
5. **Frontend actualiza** el estado y re-renderiza la interfaz

## 🚀 Próximas Mejoras

- [ ] Autenticación y autorización de usuarios
- [ ] Fechas de vencimiento para tareas
- [ ] Categorización de tareas
- [ ] Filtros y búsqueda
- [ ] Notificaciones push
- [ ] Exportación de tareas

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Solución de Problemas

### Errores Comunes

1. **Puerto ocupado:** Asegúrate de que los puertos 3000, 8000 y 5432 estén disponibles
2. **Base de datos no conecta:** Verifica que PostgreSQL esté ejecutándose
3. **Cambios no se reflejan:** Reinicia los contenedores con `docker-compose restart`

### Logs de Debug

```bash
# Ver logs de todos los servicios
docker-compose logs

# Ver logs de un servicio específico
docker-compose logs backend
docker-compose logs frontend
docker-compose logs db
```

## 📞 Contacto

Para preguntas o sugerencias, por favor crea un issue en el repositorio.