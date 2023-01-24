import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import type { State } from "../types";
import axios from "axios";

const onClick = ([_, setState]: State<{ data: string, error: string }>) => {
  axios.get("https://the-bengal-beat.vercel.app/api/responses")
    .then(response => {
      setState({ data: JSON.stringify(response.data), error: "" })
    })
    .catch(err => {
      setState({ data: "", error: JSON.stringify(err) })
    })
}

const Home: NextPage = () => {
  const [state, setState] = useState({ data: "", error: "" })
  
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <p>{state.data}</p>
      <p>{state.error}</p>
      <button onClick={() => onClick([state, setState])}>Get Values</button>
    </>
  );
};

export default Home;
