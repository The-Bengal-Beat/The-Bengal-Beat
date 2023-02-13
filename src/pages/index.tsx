import type { NextPage } from "next";
import Page from "../components/Layout/Page";
import { getAuthed } from "../utils/getAuthed";

const Home: NextPage = () => {
  return (
    <Page>
      Hello - Content
    </Page>
  );
};

export const getServerSideProps = getAuthed;

export default Home;
