import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './api/api';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

const port: number = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('coucou, nodemon ????!?????');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));