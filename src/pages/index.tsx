import { Paper } from "@mui/material";
import type { NextPage } from "next";
import PostTable from "../components/PostTable/PostTable";

const Home: NextPage = () => {
  return (
    <Paper className="p-16">
      <PostTable />
    </Paper>
  )
};

export default Home;
