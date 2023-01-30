import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { getDataFromApi, IApiOutput } from "../utils/getDataFromApi";
import PostGroup from "../components/PostGroup/PostGroup";
import PostTable from "../components/PostTable/PostTable";

const Home: NextPage = () => {
  return <PostTable />
};

export default Home;
