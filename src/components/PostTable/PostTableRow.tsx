import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { IPostFromApi } from '../../types'

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