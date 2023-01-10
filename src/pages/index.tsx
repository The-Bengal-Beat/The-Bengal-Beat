import { type NextPage } from "next";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useMutation();

  return (
    <>
      <button onClick={() => {
        hello.mutate({ text: "hello" })
      }}>
        Get Text
      </button>
      {hello.data?.greeting}
    </>
  );
};

export default Home;
