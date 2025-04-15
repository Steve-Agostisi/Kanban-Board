# Kanban Board Application

A full-stack Kanban Board application for task management, built with a **React** frontend, **Node.js/Express** backend, and **PostgreSQL** database.

---

## Features

- User authentication (login/logout).
- Create, update, and delete tasks.
- Assign tasks to users.
- Track task status (To Do, In Progress, Done).
- Responsive design for desktop and mobile.

---

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **TypeScript**: For type safety.
- **CSS/SCSS**: For styling.

### Backend
- **Node.js**: For server-side logic.
- **Express**: For building RESTful APIs.
- **bcrypt**: For password hashing.
- **jsonwebtoken (JWT)**: For user authentication.

### Database
- **PostgreSQL**: For storing user and task data.

---

## Prerequisites

Before running the project, ensure you have the following installed:
- **Node.js** (v14 or later)
- **PostgreSQL** (v12 or later)
- **npm** (comes with Node.js)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Steve-Agostisi/kanban-board.git
cd kanban-board 
 
```
### 2. Set Up the Database
1. Open the PostgreSQL terminal:
   ```bash
   psql -U postgres
   ```
2. Run the schema file to create the database and tables:
   ```sql
   \i 'c:/Users/sagos/OneDrive/Desktop/Kanban Board/Develop/server/db/schema.sql'
   ```

### 3. Configure Environment Variables
Create a `.env` file in the `server` directory with the following content:
```env
DB_NAME=kanban_db
DB_USER=postgres
DB_PASSWORD=your_database_password
JWT_SECRET_KEY=your_secret_key
```

### 4. Install Dependencies
#### Backend
```bash
cd Develop/server
npm install
```

#### Frontend
```bash
cd ../client
npm install
```

### 5. Start the Application
#### Backend
```bash
cd Develop/server
npm run start:dev
```

#### Frontend
```bash
cd ../client
npm run start
```

---

## API Endpoints

### Authentication
- **POST** `/auth/login`: Log in a user.
  - Request Body:
    ```json
    {
      "username": "SunnyScribe", 
      "password": "password"
    }
    ```
  - Response:
    ```json
    {
      "token": "your_jwt_token"
    }
    ```

### Tasks
- **GET** `/tasks`: Get all tasks.
- **POST** `/tasks`: Create a new task.
- **PUT** `/tasks/:id`: Update a task.
- **DELETE** `/tasks/:id`: Delete a task.

---

## Troubleshooting

### Common Issues
1. **Database Connection Error**:
   - Ensure PostgreSQL is running.
   - Verify the `.env` file contains the correct database credentials.

2. **Invalid Login Credentials**:
   - Ensure the `users` table contains a valid user with a hashed password.
   - Use the following SQL to verify:
     ```sql
     SELECT * FROM users;
     ```

3. **Frontend Not Connecting to Backend**:
   - Ensure the backend is running on the correct port (default: `3000`).
   - Verify the frontend is configured to use the correct API URL.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
```



