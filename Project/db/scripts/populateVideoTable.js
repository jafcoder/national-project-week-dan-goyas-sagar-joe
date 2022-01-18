import query from "../index.js";
import videos from "../../data.js";

async function populateVideoTable() {
  for (let i = 0; i < videos.length; i++) {
    const subject = videos[i].subject;
    const link = videos[i].link;
    const recommended = videos[i].recommended;

    const res = await query(
      `INSERT INTO videos (subject, link, recommended) VALUES ($1, $2, $3) RETURNING *`,
      [subject, link, recommended]
    );
    console.log("Returned items", res);
  }
}

populateVideoTable();
