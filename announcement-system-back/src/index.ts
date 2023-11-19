// index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as api from './controller/announcement/announcement.controller';

const app = express();
const port = process.env.PORT;
app.use(cors({ origin: true }));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
// route api
app.get('/announcements', api.getAnnouncements);
app.post('/announcements', api.addAnnouncement);
app.put('/announcements/:id', api.updateAnnouncement);
app.delete('/announcements/:id', api.deleteAnnouncement);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
