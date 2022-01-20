import query from "../db/index.js";

export async function getContent(subject, topic) {
  //   let newSubject = subject;
  const data = await query(`SELECT * FROM ` + topic + ` WHERE subject = $1;`, [
    subject,
  ]);
  return data.rows;
}

export async function getAll() {
  const data = await query(`SELECT * FROM videos, articles, content;`);
  return data.rows;
}

// export async function getVideo(topic) {
//   //   let newSubject = subject;
//   const data = await query(`SELECT * FROM ` + topic + ` ;`);
//   return data.rows;
// }
