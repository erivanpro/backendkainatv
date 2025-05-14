const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect((err: { stack: any; }, client: any, release: () => void) => {
  if (err) {
    return console.error("PostgreSQL connection error:", err.stack);
  }
  console.log("Connected to PostgreSQL database!");
  release();
});

module.exports = pool;
