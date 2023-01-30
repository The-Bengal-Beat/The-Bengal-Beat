import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material'
import { getDataFromApi, IApiOutput } from '../../utils/getDataFromApi'
import React, { useEffect, useState } from 'react'
import PostTableRow from './PostTableRow'

const PostTable: React.FC = () => {
    const [data, setData] = useState<IApiOutput>({ posts: [], error: "" })
    const [rowsPerPage, setRowsPerPage] = useState<number>(10)
    const [page, setPage] = useState<number>(0)

    const handlePageChange = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    useEffect(() => {
        getDataFromApi(page, rowsPerPage)
            .then(data => {
                setData(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [page, rowsPerPage])

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
                        {data.posts?.map(post => <PostTableRow {...post} />)}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.posts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onRowsPerPageChange={handleRowsPerPageChange}
                onPageChange={handlePageChange}
            />
        </Paper>

    )
}

export default PostTable