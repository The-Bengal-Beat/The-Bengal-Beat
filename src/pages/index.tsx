import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import type { State } from "../types";
import axios from "axios";

const onClick = ([_, setState]: State<string>) => {
  axios.get("https://the-bengal-beat.vercel.app/api/responses")
    .then(response => {
      setState(JSON.stringify(response.data))
    })
    .catch(err => {
      console.error(err)
    })
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
