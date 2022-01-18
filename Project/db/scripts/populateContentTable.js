import query from "../index.js";
import contents from "../../data.js";

async function populateContentTable() {
  for (let i = 0; i < contents.length; i++) {
    const subject = contents[i].subject;
    const code_example = contents[i].code_example;
    const description = contents[i].description;

    const res = await query(
      `INSERT INTO content (subject, code_example, description) VALUES ($1, $2, $3) RETURNING *;`,
      [subject, code_example, description]
    );
    console.log("populateContentTable", res.rows);
  }
}
