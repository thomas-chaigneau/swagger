import { Request, Response, NextFunction } from 'express';
import { Sirup } from '../models/Sirup';

const fakeList = [
  new Sirup('fraise', 2.34, 'low'),
  new Sirup('menthe', 3.36),
  new Sirup('franboise', 2.99, 'high'),
  new Sirup('sucre de canne', 4.34, 'low'),
];

type ReqQuery = {
  maxPrice: number;
};

type Params = {
  name: string;
}

const getSirups = (req: Request<{}, {}, {}, ReqQuery>, res: Response<Sirup[]>, next: NextFunction) => {
  const foundSirups = fakeList.filter((sirup: Sirup) => req.query?.maxPrice ? sirup.price < req.query.maxPrice : true)
  return res.send(foundSirups).status(200);
}

const getSirupByName = (req: Request<Params>, res: Response, next: NextFunction): Response<Sirup> => {
  const [foundSirup] = fakeList.filter((sirup: Sirup) => sirup.name === req.params.name)
  return res.send(foundSirup).status(200);
}

const postSirups = (req: Request<{}, {}, Sirup>, res: Response<Sirup[]>, next: NextFunction) => {
  fakeList.push(req.body);
  return res.send(fakeList).status(201);
}

export {
  getSirups,
  getSirupByName,
  postSirups,
}