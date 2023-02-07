import { Paper, Pagination } from "@mui/material";
import { getPosts } from "../../utils/getPosts";
import React, { useEffect, useState } from "react";
import { PostForm } from "./PostForm";
import { FormProvider, useForm } from "react-hook-form";
import type { IGetPostsResponse } from "../../utils/getPosts";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "writer", headerName: "Writer", flex: 2 },
  { field: "title", headerName: "Title", flex: 3 },
  { field: "status", headerName: "Status", flex: 2 },
  { field: "datePublished", headerName: "Date Published", flex: 1 },
];

const PostTable: React.FC = () => {
  const methods = useForm();
  const [data, setData] = useState<IGetPostsResponse>({ data: [], error: "" });
  const [page, setPage] = useState<number>(1);
  const [rows, setRows] = useState<any[]>([]);

  const category = methods.watch("category") as string;
  const search = methods.watch("search") as string;

  const handlePageChange = (_: unknown, newPage: number) => setPage(newPage);

  useEffect(() => {
    getPosts({ page, category, search })
      .then((data) => {
        setData(data);
        setRows(
          data.data.map((row) => ({
            id: row.id,
            writer: row.custom_fields.writer,
            title: row.title.rendered,
            status: row.status,
            datePublished: new Date(row.date_gmt).toDateString(),
          }))
        );
      })
      .catch((err) => console.error(err));
  }, [page, category, search]);

  return (
    <Paper className="flex h-full w-full flex-col items-center">
      <FormProvider>
      <PostForm control={control} />
      </FormProvider>
      <div className="h-[500px] w-full px-2">
        <DataGrid columns={columns} rows={rows} hideFooter />
      </div>
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
