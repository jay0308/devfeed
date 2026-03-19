import path from "path";
import fs from "fs";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

export type User = { email: string; password: string };
export type Post = {
  id: string;
  image: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  likes: number;
};

type Schema = {
  users: User[];
  posts: Post[];
};

const dataDir = path.join(process.cwd(), "data");
const dbPath = path.join(dataDir, "db.json");

// Create data directory if it doesn't exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const adapter = new JSONFile<Schema>(dbPath);
const defaultData: Schema = { users: [], posts: []};
const db = new Low<Schema>(adapter, defaultData);

export async function initDb() {
  await db.read();
  db.data ||= defaultData;
}

export const getDb = () => db;