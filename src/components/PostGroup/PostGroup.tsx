import React from 'react'
import { IApiOutput } from '../../utils/getDataFromApi'
import PostRow from '../PostRow/PostRow'

interface IPostGroup {
    data: IApiOutput
}

const PostGroup: React.FC<IPostGroup> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-y-px flex-wrap w-full h-full p-4">
        {data.posts.map(post => <PostRow data={post} key={post.id} />)}
    </div>
  )
}

export default PostGroup