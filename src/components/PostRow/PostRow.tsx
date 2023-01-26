import React from 'react'
import { IPostFromApi } from '../../types'

interface IPostRow {
    post?: IPostFromApi
}

const PostRow: React.FC<IPostRow> = ({ post }) => {
  return (
    <div className="flex flex-row w-full h-50px p-2 m-4 bg-[#363636]">
        <div className="">
            <p className="text-white text-4 font-semibold">F. Last Name</p>
            <p className="text-white text-4">{post?.title.rendered}</p>
        </div>
        <div className="flex-grow"/>
        <p className="text-white text-4">{post?.date_gmt}</p>
    </div>
  )
}

export default PostRow