import query from "../index.js";

let sqlString = `CREATE TABLE IF NOT EXISTS content (id SERIAL PRIMARY KEY, subject TEXT, code_example TEXT, description TEXT, title TEXT);`;

async function createContent() {
  const contentTable = await query(sqlString);
  console.log(contentTable);
}

createContent();
// content rows id, subject, code_example, description
