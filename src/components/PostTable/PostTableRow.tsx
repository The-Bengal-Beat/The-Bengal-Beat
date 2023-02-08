import { TableCell, TableRow } from "@mui/material";
import type { IPost } from "../../types";
import React from "react";
import ReactHtmlParser from "react-html-parser"

const PostTableRow: React.FC<IPost> = ({ ...post }) => {
  const date = new Date(post.date_gmt);

  return (
    <TableRow key={post.id}>
      <TableCell>{post.custom_fields.writer}</TableCell>
      <TableCell>{ReactHtmlParser(post.title.rendered)}</TableCell>
      <TableCell>{post.status}</TableCell>
      <TableCell>{date.toDateString()}</TableCell>
    </TableRow>
  );
};

export default PostTableRow;
