import { Router } from 'express';
import { postOrders } from '../controllers/orders.controllers.js';

const router = Router();

router.post('/postOrders', postOrders);

export default router;
