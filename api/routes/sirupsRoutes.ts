import { Router } from 'express';

import { getSirups, postSirups, getSirupByName } from '../controllers/sirupsControllers';

const router = Router();

router.route('/').get(getSirups);
router.route('/:name').get(getSirupByName);
router.route('/').post(postSirups);

export {
  router as sirupsRoutes,
};