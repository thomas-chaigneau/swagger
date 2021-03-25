import { Router } from 'express';

import { getSodas, postSodas } from '../controllers/sodasController';

const router = Router();

router.route('/').get(getSodas);
// router.route('/:id').get(getSodasById);
router.route('/').post(postSodas);

export {
  router as sodasRoutes,
};