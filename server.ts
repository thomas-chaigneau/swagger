import express, { Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger/doc';

import router from './api/api';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);

const port: number = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('coucou, nodemon ????!?????');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));