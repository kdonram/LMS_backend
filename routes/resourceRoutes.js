import express from 'express';
import { reserveResource, addResource, getResources, getAvailableResources, getResourceUsageAnalytics } from '../controllers/resourceController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { roleMiddleware } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['admin']), addResource);
router.get('/', authMiddleware, getResources);
router.get('/available', authMiddleware, getAvailableResources);
router.get('/analytics', authMiddleware, roleMiddleware(['admin']), getResourceUsageAnalytics);
router.post('/:resId/reserve', authMiddleware, reserveResource);

export default router;
