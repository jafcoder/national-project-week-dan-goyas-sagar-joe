import query from "../index.js";

let sqlString = `CREATE TABLE IF NOT EXISTS videos (id SERIAL PRIMARY KEY, subject TEXT, link TEXT, recommended TEXT);`;

async function createVideoTable() {
  const videoTable = await query(sqlString);
  console.log(videoTable);
}

createVideoTable();
// table rows id, subject, link, recommended
