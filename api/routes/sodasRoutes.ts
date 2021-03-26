import { Router } from 'express';

import { getSodas, postSodas, putSodasByName } from '../controllers/sodasController';

const router = Router();

router.route('/').get(getSodas);
router.route('/').post(postSodas);
router.route('/:name').put(putSodasByName);

export {
  router as sodasRoutes,
};