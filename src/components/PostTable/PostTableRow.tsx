import { TableCell, TableRow } from '@mui/material'
import type { IPostFromApi } from '../../types'
import React from 'react'

const PostTableRow: React.FC<IPostFromApi> = ({ ...post }) => {
    const date = new Date(post.date_gmt)

    return (
        <TableRow key={post.id}>
            <TableCell>{post.custom_fields.writer}</TableCell>
            <TableCell dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <TableCell>{post.status}</TableCell>
            <TableCell>{date.toDateString()}</TableCell>
        </TableRow>
    )
}

export default PostTableRow