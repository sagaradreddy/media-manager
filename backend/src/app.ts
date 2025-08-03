import 'dotenv/config';
import express, {Response, Request} from 'express';
import cors from 'cors';
// import mediaRoutes from './routes/mediaRoutes';
import { connectToDatabase } from './config/database';
import mediaRoutes from './routes/mediaRoutes';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Database connection
connectToDatabase();
// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Media Management API');
});
app.use('/api/media/', mediaRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});