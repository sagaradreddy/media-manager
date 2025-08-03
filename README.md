# Favorite Media App

This project is a full-stack web application that allows users to manage a list of their favorite movies and TV shows. It features a backend built with Node.js, Express, and MySQL, and a frontend developed using React with Vite and TypeScript.

## Features

- Add, view, edit, and delete media entries (movies and TV shows).
- Infinite scrolling in the media table display for better user experience.
- Responsive design for accessibility on various devices.

## Project Structure

```
favorite-media-app
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── config
│   │   │   └── database.ts
│   │   ├── controllers
│   │   │   └── mediaController.ts
│   │   ├── models
│   │   │   └── media.ts
│   │   ├── routes
│   │   │   └── mediaRoutes.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── components
│   │   │   ├── MediaTable.tsx
│   │   │   ├── MediaForm.tsx
│   │   │   └── InfiniteScroll.tsx
│   │   ├── pages
│   │   │   └── Home.tsx
│   │   ├── services
│   │   │   └── api.ts
│   │   └── types
│   │       └── index.ts
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MySQL

### Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Install Prisma CLI and client:
   ```
   npm install prisma --save-dev
   npm install @prisma/client
   ```
4. Initialize Prisma (if not already done):
   ```
   npx prisma init
   ```
5. Set up the MySQL database and update the database configuration in `.env`.
6. Define your data models in `prisma/schema.prisma`.
7. Run Prisma migrations to set up your database tables:
   ```
   npx prisma migrate dev --name init
   ```
8. Generate the Prisma client:
   ```
   npx prisma generate
   ```
9. Start the backend server:
   ```
   npm run start
   ```
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm run dev
   ```

## Usage

- Access the application in your web browser at `http://localhost:3000`.
- Use the interface to manage your favorite movies and TV shows.

## License

This project is licensed under the MIT License.