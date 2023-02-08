import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPost, IGetPostResponse } from "../../utils/getPost";
import { parseHTML } from "../../utils/parseHTML";

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
  }, []);

  return (
    <div className="h-full w-full p-16">
      {parseHTML(post?.data.title.rendered ?? "")}
    </div>
  );
};

export default Post;
