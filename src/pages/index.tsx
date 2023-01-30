import { Box } from "@mui/material";
import type { NextPage } from "next";
import PostTable from "../components/PostTable/PostTable";

const Home: NextPage = () => {
  return (
    <Box className="p-16">
      <PostTable />
    </Box>
  )
};

export default Home;
