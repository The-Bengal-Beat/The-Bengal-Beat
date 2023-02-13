import { Paper, Pagination } from "@mui/material";
import { getPosts } from "../utils/getPosts";
import React, { useEffect, useState } from "react";
import { SearchMenu } from "./SearchMenu";
import { FormProvider, useForm } from "react-hook-form";
import type { IGetPostsResponse } from "../utils/getPosts";
import { DataGrid, GridActionsCellItem, GridRowParams } from "@mui/x-data-grid";
import { useRouter } from "next/router";

const PostTable: React.FC = () => {
  const methods = useForm();
  const [category, search] = methods.watch(["category", "search"]) as string[];
  const [data, setData] = useState<IGetPostsResponse>({ data: [], error: "" });
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<any[]>([]);
  const router = useRouter();

  const columns = [
    { field: "writer", headerName: "Writer", flex: 2 },
    { field: "title", headerName: "Title", flex: 3 },
    { field: "status", headerName: "Status", flex: 2 },
    { field: "datePublished", headerName: "Date Published", flex: 1 },
    {
      field: "actions",
      type: "actions",
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          onClick={() => {
            router
              .push(`/post/${params.id}`)
              .then()
              .catch((err) => console.error(err));
          }}
          label="Edit"
          key={params.id}
          showInMenu
        />,
        <GridActionsCellItem
          onClick={() => console.log("Hello")}
          label="Delete"
          key={params.id}
          showInMenu
        />,
      ],
    },
  ];


  useEffect(() => {
    getPosts({ page, category, search })
      .then((data) => {
        const newPosts = data.data.map((row) => ({
          id: row.id,
          writer: row.custom_fields.writer,
          title: row.title.rendered,
          status: row.status,
          datePublished: new Date(row.date_gmt).toDateString(),
        }))

        setData(data);
        setPosts(newPosts);
      })
      .catch((err) => console.error(err));
  }, [page, category, search]);

  return (
    <Paper className="flex h-full w-full flex-col items-center">
      <FormProvider {...methods}>
        <SearchMenu />
      </FormProvider>
      <div className="h-[500px] w-full px-2">
        <DataGrid columns={columns} rows={posts} hideFooter disableColumnMenu />
      </div>
      <Pagination
        variant="text"
        color="primary"
        count={Number(data.headers?.["x-wp-totalpages"])}
        page={page}
        onChange={(_: unknown, newPage: number) => setPage(newPage)}
        className="my-4"
      />
    </Paper>
  );
};

export default PostTable;
