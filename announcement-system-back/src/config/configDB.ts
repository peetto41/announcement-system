// configDB.ts
import mysql, { Connection } from 'mysql';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

function configureDB(): Connection {
  const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'your_username',
    password: process.env.DB_PASSWORD || 'your_password',
    database: process.env.DB_NAME || 'your_database'
  };

  const db = mysql.createConnection(dbConfig);

  // Connect to MySQL
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL');
    }
  });

  return db;
}

export default configureDB;
