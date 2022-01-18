import pg from "pg";
import database from "../config.js";

const pool = new pg.Pool({
  user: database.user,
  host: database.host,
  database: database.database,
  password: database.password,
  port: database.port,
  ssl: { rejectUnauthorized: false },
});

export function query(text, params) {
  return pool.query(text, params);
}

export default query;
