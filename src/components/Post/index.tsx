import React from 'react'
import { IPostFromApi } from '../../types'

interface IPostProps {
    data: IPostFromApi;
}

const Post = ({ data }: IPostProps) => {
  return (
    <div className="flex flex-col w-[300px] h-[500px] bg-slate-300 m-2">
        <h3 
          dangerouslySetInnerHTML={{ __html: data.title.rendered }} 
          className="overflow-hidden overflow-ellipsis whitespace-nowrap" 
        />
        <div
          dangerouslySetInnerHTML={{ __html: data.content.rendered }} 
          className="overflow-hidden overflow-ellipsis whitespace-nowrap" 
        />
    </div>
  )
}

export default Post