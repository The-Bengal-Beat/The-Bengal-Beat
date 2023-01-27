import React, { useEffect, useState } from 'react'
import { getDataFromApi, IApiOutput } from '../../utils/getDataFromApi'
import PostRow from '../PostRow/PostRow'

const PostGroup: React.FC = () => {
  const [page, setPage] = useState<number>(1)
  const [state, setState] = useState<IApiOutput>({ posts: [], error: "" })
  const [totalPosts, setTotalPosts] = useState<number>(0)

  useEffect(() => {
    getDataFromApi(page)
      .then(data => {
        setState(data)

        const total = parseInt(data.headers?.['X-WP-Total'] ?? "")
        setTotalPosts(total) 
      })
      .catch(err => console.log(err))
  }, [page])

  return (
    <div className="grid grid-cols-1 gap-y-px flex-wrap w-full h-full p-4">
        {state.posts.map(post => <PostRow data={post} key={post.id} />)}
        <div>Total Pages: {totalPosts / 20}</div>
    </div>
  )
}

export default PostGroup