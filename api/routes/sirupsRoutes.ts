import { Router } from 'express';

import { getSirups, postSirups } from '../controllers/sirupsControllers';

const router = Router();

router.route('/').get(getSirups);
router.route('/').post(postSirups);

export {
  router as sirupsRoutes,
};