import query from "../index.js";

sqlString = `CREATE TABLE IF NOT EXISTS articles (id SERIAL PRIMARY KEY, subject TEXT, link TEXT, recommended TEXT, caption TEXT, image_link TEXT);`;
async function createArticlesTable() {
  console.log("This is the articleTable");
  const articleTable = await query(sqlString);
  console.log(articleTable);
}

createArticlesTable();

// table rows, id, subject, link, caption, image_link
// call query function
// add sql string as query paramter
//  define query function in a variable
