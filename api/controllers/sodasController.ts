import { Request, Response, NextFunction } from 'express';

const getSodas = (req: Request, res: Response, next: NextFunction): Response => {
  return res.send(['sodas1', 'sodas2']).status(200);
}

const postSodas = (req: Request, res: Response, next: NextFunction): Response => {
  return res.send('nex sodas added').status(200);
}

export {
  getSodas,
  postSodas,
}