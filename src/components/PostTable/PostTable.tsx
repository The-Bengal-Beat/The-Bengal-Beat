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
  { field: "writer", headerName: "Writer", flex: 2 },
  { field: "title", headerName: "Title", flex: 3 },
  { field: "status", headerName: "Status", flex: 2 },
  { field: "datePublished", headerName: "Date Published", flex: 1 },
];

const PostTable: React.FC = () => {
  const { control, watch } = useForm();
  const [data, setData] = useState<IGetPostsResponse>({ data: [], error: "" });
  const [page, setPage] = useState<number>(1);
  const [rows, setRows] = useState<any[]>([]);

  const category = watch("category") as string;

  const handlePageChange = (page: number) => setPage(page);

  useEffect(() => {
    getPosts({ page, category })
      .then((data) => {
        setData(data);
        setRows(
          data.data.map((row) => ({
            id: row.id,
            writer: row.custom_fields.writer,
            title: row.title.rendered,
            status: row.status,
            datePublished: row.date_gmt,
          }))
        );
      })
      .catch((err) => console.error(err));
  }, [page, category]);

  return (
    <Paper className="flex flex-col items-center">
      <PostForm control={control} />
      <div className="h-[300px] w-full">
        <DataGrid
          columns={columns}
          rows={rows}
          page={page}
          pageSize={10}
          rowCount={Number(data.headers?.["x-wp-totalpages"])}
          onPageChange={handlePageChange}
        />
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
    </Paper>
  );
};

export default PostTable;
