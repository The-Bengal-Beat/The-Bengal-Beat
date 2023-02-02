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
import { useForm } from "react-hook-form";
import type { IGetPostsResponse } from "../../utils/getPosts";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "writer", headerName: "Writer", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "datePublished", headerName: "Date Published", width: 130 },
];

const rows = [
  {
    id: 1,
    writer: "Noah Fuller",
    title: "Article #1",
    status: "publish",
    datePublished: "12/31/23",
  },
  {
    id: 2,
    writer: "Noah Fuller",
    title: "Article #2",
    status: "publish",
    datePublished: "12/31/23",
  },
];

const PostTable: React.FC = () => {
  const { control, watch } = useForm();
  const [data, setData] = useState<IGetPostsResponse>({ data: [], error: "" });
  const [page, setPage] = useState<number>(1);

  const category = watch("category") as string;

  const handlePageChange = (_: unknown, newPage: number) => setPage(newPage);

  useEffect(() => {
    getPosts({ page, category })
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [page, category]);

  return (
    <Paper className="flex flex-col items-center">
      <PostForm control={control} />
      <div className="w-full h-[300px]">
        <DataGrid columns={columns} rows={rows} pageSize={20} />
      </div>
      {/* <TableContainer component={Paper}>
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
      </TableContainer> */}
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
