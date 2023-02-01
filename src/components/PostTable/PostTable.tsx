import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { getPosts } from "../../utils/getPosts";
import React, { useEffect, useState } from "react";
import PostTableRow from "./PostTableRow";
import { PostForm } from "./PostForm";

import type { IGetPostsResponse } from "../../utils/getPosts";

const PostTable: React.FC = () => {
  const [data, setData] = useState<IGetPostsResponse>({ data: [], error: "" });
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    getPosts(page)
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <Paper className="flex flex-col items-center">
      <PostForm />
      <TableContainer component={Paper}>
        <Table aria-label="Post Table">
          <TableHead>
            <TableRow>
              <TableCell>Writer</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date Published</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data?.map((post) => (
              <PostTableRow key={post.id} {...post} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        variant="outlined"
        color="primary"
        count={Number(data.headers?.["x-wp-totalpages"])}
        page={page}
        onChange={handlePageChange}
        className="my-4"
      />
    </Paper>
  );
};

export default PostTable;
