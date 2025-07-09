# Todo App Skeleton

This project is a simple full-stack Todo application skeleton using:

- **Frontend:** React + TypeScript
- **Backend:** FastAPI (Python)
- **Database:** PostgreSQL
- **Orchestration:** Docker Compose

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) and Docker Compose installed

### Running the Application

1. Clone this repository.
2. In the project root, run:

   ```sh
   docker-compose up --build
   ```

3. Access the services:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:8000](http://localhost:8000)
   - Postgres: localhost:5432 (user: `todo_user`, password: `todo_pass`, db: `todo_db`)

### Project Structure

```
.
├── backend
│   ├── Dockerfile
│   ├── main.py
│   └── requirements.txt
├── frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   ├── public
│   │   └── index.html
│   └── src
│       ├── App.tsx
│       └── index.tsx
└── docker-compose.yml
```

## Notes

- The frontend and backend are minimal skeletons. You can now implement features as needed.
- Install dependencies inside containers or locally as you develop.