import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Pagination } from '@mui/material'
import { getDataFromApi } from '../../utils/getDataFromApi'
import type { IApiOutput } from '../../utils/getDataFromApi'
import React, { useEffect, useState } from 'react'
import PostTableRow from './PostTableRow'

const PostTable: React.FC = () => {
    const [data, setData] = useState<IApiOutput>({ posts: [], error: "" })
    const [page, setPage] = useState<number>(1)

    const handlePageChange = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    useEffect(() => {
        getDataFromApi(page)
            .then(data => {
                setData(data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [page])

    return (
        <Paper>
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
                        {data.posts?.map(post => <PostTableRow key={post.id} {...post} />)}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                variant="outlined"
                shape="rounded"
                count={Number(data.headers?.["x-wp-totalpages"])}
                page={page}
                onChange={handlePageChange}
            />
        </Paper>

    )
}

export default PostTable