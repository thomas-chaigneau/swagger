const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3001;

app.get('/', (req, res) => {
  res.send('coucou, nodemon ????!?????');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));