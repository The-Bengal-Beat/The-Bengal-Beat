import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { getDataFromApi, IApiOutput } from "../utils/getDataFromApi";
import PostGroup from "../components/PostGroup/PostGroup";

const Home: NextPage = () => {
  

  return (
      <PostGroup />
  );
};

export default Home;
