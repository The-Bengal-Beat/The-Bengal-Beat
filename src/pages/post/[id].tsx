import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPost, IGetPostResponse } from "../../utils/getPost";
import ReactHtmlParser from "react-html-parser"

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<IGetPostResponse>();

  useEffect(() => {
    if (typeof id === "string") {
      getPost(id)
        .then((data) => setPost(data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  return (
    <div className="h-full w-full">
      {ReactHtmlParser(post?.data.title.rendered ?? "")}
    </div>
  );
};

export default Post;
