import { type NextPage } from "next";
import { readFileSync } from "fs";
import { IArticle } from "./api/google-form";

const Home: NextPage<{ articles: IArticle[] }> = ({ articles }) => {
  return (
    <>
    </>
  );
};

export default Home;
