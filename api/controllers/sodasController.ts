import { Request, Response, NextFunction } from 'express';
import { Soda } from '../models/Soda';

type Params = {
  name: string;
}

let fakeList = [
  new Soda('orangina', 2.34, true, 30),
];

const getSodas = (_req: Request, res: Response, next: NextFunction): Response => {
  return res.send(fakeList).status(200);
}

const postSodas = (req: Request<{}, {}, Soda>, res: Response<Soda[]>): Response => {
  fakeList.push(req.body)
  return res.send(fakeList).status(200);
}

const putSodasByName = (req: Request<Params, {}, Soda>, res: Response<Soda>): Response => {
  let newSoda = req.body;
  const newList = fakeList.map(soda => {
    if (soda.name === req.params.name) {
      newSoda = { ...soda, ...req.body }
      return newSoda;
    }
    return soda;
  });
  fakeList = newList;
  return res.send(newSoda).status(200);
}

export {
  getSodas,
  postSodas,
  putSodasByName,
}