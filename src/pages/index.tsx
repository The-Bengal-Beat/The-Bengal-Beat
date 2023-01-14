import { type NextPage } from "next";
import fs from "fs";
import path from "path";

const Home: NextPage = () => {
  const db = fs.readFileSync(path.resolve(__dirname, "src/db/store.json"), "utf-8")
  const articles = JSON.parse(db) as {
    title: string
  }[];

  return (
    <>
      Articles:
      {articles.map((article, id) => {
        return <div key={id}>{article.title}</div> 
      })}
    </>
  );
};

export default Home;
