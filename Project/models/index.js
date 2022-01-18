import query from "../db/index.js";

export async function getContentBySubject(subject) {
  let newSubject = subject;
  const data = await query(
    `SELECT * FROM videos INNER JOIN articles ON videos.$1 = articles.$1 INNER JOIN content ON videos.$1 = content.$1;`,
    [newSubject]
  );
  return data.rows;
}
//check brackets on $1 if fails
