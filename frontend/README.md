# Favorite Media App

This is a full-stack web application that allows users to manage a list of their favorite movies and TV shows. The application is built using React with Vite and TypeScript for the frontend, and Node.js with Express and MySQL for the backend.

## Features

- **Add Media**: Users can add new movies or TV shows to their favorites list.
- **View Media**: Users can view a list of their favorite media entries with infinite scrolling.
- **Edit Media**: Users can edit existing media entries.
- **Delete Media**: Users can remove media entries from their favorites list.

## Technologies Used

- **Frontend**:
  - React
  - Vite
  - TypeScript
  - Axios (for API calls)

- **Backend**:
  - Node.js
  - Express
  - MySQL
  - TypeScript

## Getting Started

### Prerequisites

- Node.js
- MySQL

### Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the MySQL database and update the database configuration in `src/config/database.ts`.

4. Start the backend server:
   ```
   npm run start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm run dev
   ```

## Usage

- Access the application in your web browser at `http://localhost:3000` (or the port specified in your backend configuration).
- Use the interface to manage your favorite movies and TV shows.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.
