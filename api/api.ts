import { Router } from 'express';
import { sodasRoutes } from './routes/sodasRoutes';
import { sirupsRoutes } from './routes/sirupsRoutes';

const router = Router();

router.use('/sodas', sodasRoutes)
router.use('/sirups', sirupsRoutes)

export default router;