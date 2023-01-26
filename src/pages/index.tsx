import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { getDataFromApi, IApiOutput } from "../utils/getDataFromApi";
import PostGroup from "../components/PostGroup/PostGroup";

const Home: NextPage = () => {
  const [state, setState] = useState<IApiOutput>({ data: [], error: "" })

  useEffect(() => {
    getDataFromApi()
      .then(data => setState(data))
      .catch(err => console.log(err))
  }, [])

  return (
      <PostGroup posts={state.data} />
  );
};

export default Home;
