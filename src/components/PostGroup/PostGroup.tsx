import React from 'react'
import { IPostFromApi } from '../../types'
import PostRow from '../PostRow/PostRow'

interface IPostGroup {
    posts: IPostFromApi[]
}

const PostGroup: React.FC<IPostGroup> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-y-px flex-wrap w-full h-full p-4">
        {posts.map(post => <PostRow data={post} key={post.id} />)}
      </div>
  )
}

export default PostGroup