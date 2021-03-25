import { Request, Response, NextFunction } from 'express';
import { Soda } from '../models/Soda';

const getSirups = (req: Request, res: Response, next: NextFunction): Response => {
  return res.send(['toto', 'tata']).status(200);
}

const postSirups = (req: Request, res: Response, next: NextFunction): Response => {
  return res.send(['toto', 'tata']).status(200);
}

export {
  getSirups,
  postSirups,
}