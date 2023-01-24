import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import type { State } from "../types";

const onClick = ([_, setState]: State<string>) => {
  const json = fetch("https://thebengalbeat.com/wp-json/wp/v2/posts")
    .then(response => response.json())
  setState(JSON.stringify(json))
  return;
}

const Home: NextPage = () => {
  const [state, setState] = useState("")
  
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <p>{state}</p>
      <button onClick={() => onClick([state, setState])}>Get Values</button>
    </>
  );
};

export default Home;
