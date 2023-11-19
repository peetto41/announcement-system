"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// configDB.ts
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file
function configureDB() {
    const dbConfig = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'your_username',
        password: process.env.DB_PASSWORD || 'your_password',
        database: process.env.DB_NAME || 'your_database'
    };
    const db = mysql_1.default.createConnection(dbConfig);
    // Connect to MySQL
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
        }
        else {
            console.log('Connected to MySQL');
        }
    });
    return db;
}
exports.default = configureDB;
