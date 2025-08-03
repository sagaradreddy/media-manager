# Favorite Media App - Backend

## Overview
The Favorite Media App is a full-stack web application that allows users to manage a list of their favorite movies and TV shows. Users can add, view, edit, and delete entries, with features for infinite scrolling in the display of media entries.

## Technologies Used
- **Backend**: Node.js, Express, TypeScript, MySQL
- **Frontend**: React, Vite, TypeScript

## Backend Structure
The backend is structured as follows:

- **src/app.ts**: Entry point of the backend application. Initializes the Express app, sets up middleware, and defines routes for handling media entries.
- **src/config/database.ts**: Contains the configuration for connecting to the MySQL database and exports a function to establish the connection.
- **src/controllers/mediaController.ts**: Exports the `MediaController` class, which includes methods for handling CRUD operations for media entries.
- **src/models/media.ts**: Defines the Media model representing the structure of media entries in the database.
- **src/routes/mediaRoutes.ts**: Exports a function that defines the API endpoints for media operations, utilizing the `MediaController`.
- **src/types/index.ts**: Exports interfaces that define the types for media entries and request/response objects.

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd favorite-media-app/backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure the database**:
   Update the database connection settings in `src/config/database.ts` to match your MySQL setup.

4. **Run the application**:
   ```
   npm run start
   ```

## API Endpoints
- `POST /api/media`: Add a new media entry.
- `GET /api/media`: Retrieve all media entries (supports infinite scrolling).
- `PUT /api/media/:id`: Update a media entry by ID.
- `DELETE /api/media/:id`: Delete a media entry by ID.

## Features
- Add, view, edit, and delete favorite movies and TV shows.
- Infinite scrolling for the media entries display.

## License
This project is licensed under the MIT License.