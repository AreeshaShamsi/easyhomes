import { Router } from 'express';
const router = Router();
import { submitContactForm } from '../controllers/contactController';

router.post('/', submitContactForm);

export default router;
