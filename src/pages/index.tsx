import { type NextPage } from "next";
import { readFileSync } from "fs";
import { IArticle } from "./api/google-form";

const Home: NextPage<{ articles: IArticle[] }> = ({ articles }) => {
  return (
    <>
      Articles:
      {articles.map((article, id) => {
        return <div key={id}>{article.title}</div> 
      })}
    </>
  );
};

export function getServerSideProps() {
  const db = readFileSync("db/store.json", "utf-8")
  const articles = JSON.parse(db) as IArticle[]

  return { props: { articles } }
}

export default Home;
