import { TableCell, TableRow } from "@mui/material";
import type { IPost } from "../types";
import React from "react";
import parser from "html-react-parser"

const Post: React.FC<IPost> = ({ ...post }) => {
  const date = new Date(post.date_gmt);

  return (
    <TableRow key={post.id}>
      <TableCell>{post.custom_fields.writer}</TableCell>
      <TableCell>{parser(post.title.rendered)}</TableCell>
      <TableCell>{post.status}</TableCell>
      <TableCell>{date.toDateString()}</TableCell>
    </TableRow>
  );
};

export default Post;
