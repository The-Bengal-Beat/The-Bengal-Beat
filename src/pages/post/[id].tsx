import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPost, IGetPostResponse } from "../../utils/getPost";
import { parseHTML } from "../../utils/parseHTML";

const Post: NextPage = () => {
  const router = useRouter()
  const { id } = router.query;

  if (!(typeof id === "string")) return <></>;

  const [post, setPost] = useState<IGetPostResponse>();

  useEffect(() => {
    getPost(id)
      .then((data) => setPost(data))
  }, [])

  return (
    <div className="p-16 h-full w-full">
      {parseHTML(post?.data.title.rendered ?? "")}
    </div>
  )
};

export default Post;
