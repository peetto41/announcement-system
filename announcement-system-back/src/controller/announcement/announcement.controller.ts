// annnnouncement.controller.ts
import { Request, Response } from 'express';
import configureDB from '../../config/configDB';

const db = configureDB();

// read show all Announcements
export function getAnnouncements(req: Request, res: Response): void {
  const query = 'SELECT id,title,detail,created_date,updated_date FROM annoucement';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log(results);
      res.json(results);
    }
  });
}

// read show info Announcements
export function getInfoAnnouncements(req: Request, res: Response): void {
  const { id } = req.params;

  const query = 'SELECT id,title,detail,created_date,updated_date FROM annoucement WHERE id = ?';

  db.query(query,[id], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log(results);
      res.json(results[0]);
    }
  });
}

// insert Announcements
export function addAnnouncement(req: Request, res: Response): void {
    const { title, detail } = req.body;
  
    const query = 'INSERT INTO annoucement (title, detail) VALUES (?, ?)';
    const values = [title, detail];
  
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ message: 'Announcement added successfully', id: results.insertId });
      }
    });
}

// update Announcements
export function updateAnnouncement(req: Request, res: Response): void {
  const { id } = req.params;
  const { title, detail } = req.body;

  const query = 'UPDATE annoucement SET title = ?, detail = ? WHERE id = ?';
  const values = [title, detail, id];

  db.query(query, values, (err) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json({ message: 'Announcement updated successfully', id });
    }
  });
}

// delete Announcements
export function deleteAnnouncement(req: Request, res: Response): void {
  const { id } = req.params;

  const query = 'DELETE FROM annoucement WHERE id = ?';

  db.query(query, [id], (err) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json({ message: 'Announcement deleted successfully', id });
    }
  });
}
