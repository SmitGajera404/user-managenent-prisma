import express from 'express';
import cors from 'cors';
import routes from './Routes/routes.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = 5000;
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
