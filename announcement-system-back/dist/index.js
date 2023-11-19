"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const configDB_1 = __importDefault(require("./config/configDB"));
const cors_1 = __importDefault(require("cors"));
const api = __importStar(require("./controller/announcement/announcement.controller"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({ origin: true }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
// Configure the database
const db = (0, configDB_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// route api
app.get('/announcements', api.getAnnouncements);
app.post('/announcements', api.addAnnouncement);
app.put('/announcement/:id', api.updateAnnouncement);
app.delete('/announcement/:id', api.deleteAnnouncement);
// // Insert a new announcement
// app.post('/announcement', (req: Request, res: Response) => {
//     const { title, detail } = req.body;
//     const query = 'INSERT INTO announcement (title, detail) VALUES (?, ?)';
//     const values = [title, detail];
//     db.query(query, values, (err, results) => {
//       if (err) {
//         console.error('Error executing MySQL query:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.json({ message: 'Announcement added successfully', id: results.insertId });
//       }
//     });
//   });
//   // Update an existing announcement
//   app.put('/announcement/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { title, detail } = req.body;
//     const query = 'UPDATE announcement SET title = ?, detail = ? WHERE id = ?';
//     const values = [title, detail, id];
//     db.query(query, values, (err) => {
//       if (err) {
//         console.error('Error executing MySQL query:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.json({ message: 'Announcement updated successfully', id });
//       }
//     });
//   });
//   // Delete an announcement
//   app.delete('/announcement/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
//     const query = 'DELETE FROM announcement WHERE id = ?';
//     db.query(query, [id], (err) => {
//       if (err) {
//         console.error('Error executing MySQL query:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.json({ message: 'Announcement deleted successfully', id });
//       }
//     });
//   });
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
