import query from "../index.js";
import { articles } from "../../data.js";

async function populateArticleTable() {
  for (let i = 0; i < articles.length; i++) {
    let subject = articles[i].subject;
    let link = articles[i].link;
    let recommended = articles[i].recommended;
    let caption = articles[i].caption;
    let image_link = articles[i].image_link;

    const res = await query(
      `INSERT INTO articles (subject, link, recommended, caption, image_link) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [subject, link, recommended, caption, image_link]
    );
    console.log("populateArticleTable", res.rows);
  }
}

populateArticleTable();
