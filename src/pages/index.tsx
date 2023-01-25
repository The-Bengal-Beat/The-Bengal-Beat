import Head from "next/head";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { getDataFromApi, IApiOutput } from "../utils/getDataFromApi";

const Home: NextPage = () => {
  const [state, setState] = useState<IApiOutput>({ data: [], error: "" })

  useEffect(() => {
    getDataFromApi()
      .then(data => setState(data))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <>
      <p>Data: {JSON.stringify(state.data)}</p>
      <p>Errors: {state.error}</p>
    </>
  );
};

export default Home;
