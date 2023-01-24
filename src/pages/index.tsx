import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import type { IPostFromApi, State } from "../types";
import axios from "axios";
import { getDataFromApi, IApiOutput } from "../utils/getDataFromApi";

const onClick = ([_, setState]: State<{ data: IPostFromApi[], error: string }>) => {
  
}

const Home: NextPage = () => {
  const [state, setState] = useState<IApiOutput>({ data: [], error: "" })
  
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <p>Data: {JSON.stringify(state.data)}</p>
      <p>Errors: {state.error}</p>
      <button onClick={() => getDataFromApi().then(data => setState(data))}>Get Values</button>
    </>
  );
};

export default Home;
