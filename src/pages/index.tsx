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

export async function getServerSideProps() {
  const db = readFileSync("src/db/store.json", "utf-8")
  const articles = JSON.parse(db)

  return { props: { articles } }
}

export default Home;
