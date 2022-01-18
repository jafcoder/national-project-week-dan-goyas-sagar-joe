import query from "../index.js";
import articles from "../../data.js";

async function populateArticleTable() {
  for (let i = 0; i < articles.length; i++) {
    subject = articles[i].subject;
    link = articles[i].link;
    recommended = articles[i].recommended;
    caption = articles[i].caption;
    image_link = articles[i].image_link;

    const res = await query(
      `INSERT INTO articles (subject, link, recommended, caption, image_link) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [subject, link, recommended, caption, image_link]
    );
    console.log("Returned items", res);
  }
}

populateArticleTable();
