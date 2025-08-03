import { Router } from 'express';
import MediaController from '../controllers/mediaController';

const router = Router();
router.post('/addMedia', MediaController.addMedia.bind(MediaController));
router.get('/addMedia', MediaController.getAllMedia.bind(MediaController));
router.put('/addMedia/:id', MediaController.updateMedia.bind(MediaController));
router.delete('/addMedia/:id', MediaController.deleteMedia.bind(MediaController));
router.post('/login', MediaController.logIn.bind(MediaController));

export default router;