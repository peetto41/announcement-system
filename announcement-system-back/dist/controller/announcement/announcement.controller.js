"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnnouncement = exports.updateAnnouncement = exports.addAnnouncement = exports.getInfoAnnouncements = exports.getAnnouncements = void 0;
const configDB_1 = __importDefault(require("../../config/configDB"));
const db = (0, configDB_1.default)();
// read show all Announcements
function getAnnouncements(req, res) {
    const query = 'SELECT id,title,detail,created_date,updated_date FROM annoucement';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Internal Server Error');
        }
        else {
            console.log(results);
            res.json(results);
        }
    });
}
exports.getAnnouncements = getAnnouncements;
// read show info Announcements
function getInfoAnnouncements(req, res) {
    const { id } = req.params;
    const query = 'SELECT id,title,detail,created_date,updated_date FROM annoucement WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Internal Server Error');
        }
        else {
            console.log(results);
            res.json(results[0]);
        }
    });
}
exports.getInfoAnnouncements = getInfoAnnouncements;
// insert Announcements
function addAnnouncement(req, res) {
    const { title, detail } = req.body;
    const query = 'INSERT INTO annoucement (title, detail) VALUES (?, ?)';
    const values = [title, detail];
    db.query(query, values, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Internal Server Error');
        }
        else {
            res.json({ message: 'Announcement added successfully', id: results.insertId });
        }
    });
}
exports.addAnnouncement = addAnnouncement;
// update Announcements
function updateAnnouncement(req, res) {
    const { id } = req.params;
    const { title, detail } = req.body;
    const query = 'UPDATE annoucement SET title = ?, detail = ? WHERE id = ?';
    const values = [title, detail, id];
    db.query(query, values, (err) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Internal Server Error');
        }
        else {
            res.json({ message: 'Announcement updated successfully', id });
        }
    });
}
exports.updateAnnouncement = updateAnnouncement;
// delete Announcements
function deleteAnnouncement(req, res) {
    const { id } = req.params;
    const query = 'DELETE FROM annoucement WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Internal Server Error');
        }
        else {
            res.json({ message: 'Announcement deleted successfully', id });
        }
    });
}
exports.deleteAnnouncement = deleteAnnouncement;
