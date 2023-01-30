import React, { ChangeEvent, useEffect, useState } from 'react'
import { getDataFromApi, IApiOutput } from '../../utils/getDataFromApi'
import PostRow from '../PostRow/PostRow'
import Pagination from '@mui/material/Pagination';

const PostGroup: React.FC = () => {
  const [page, setPage] = useState<number>(1)
  const [state, setState] = useState<IApiOutput>({ posts: [], error: "" })
  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    getDataFromApi(page, 20)
      .then(data => {
        setState(data)

        const totalPosts = Number(data.headers?.['x-wp-total'] ?? "")
        setTotalPages(Math.ceil(totalPosts / 20)) 
      })
      .catch(err => console.log(err))
  }, [page])

  return (
    <div className="grid grid-cols-1 gap-y-px flex-wrap w-full h-full p-4">
      {state.posts.map(post => <PostRow data={post} key={post.id} />)}
      <Pagination 
        className="justify-self-center"
        count={totalPages} 
        onChange={(_: ChangeEvent<unknown>, value: number) => setPage(value)} />
    </div>
  )
}

export default PostGroup