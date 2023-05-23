import { db } from "@vercel/postgres";

export default async function POST(req: any, res: any) {
  const client = await db.connect();
  try {
    await client.sql`CREATE TABLE Pets (Name varhar(255), Owner varchar(255));`;
    const names = ["Fiona", "Lucy"];
    await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
  } catch (error) {
    return res.status(500).json({ error });
  }
  const pets = await client.sql`SELECT * FROM  Pets;`;
  return res.status(200).json({ pets });
}
