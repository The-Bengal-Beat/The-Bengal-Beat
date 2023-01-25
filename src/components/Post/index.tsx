import React from 'react'
import { IPostFromApi } from '../../types'

interface IPostProps {
    data: IPostFromApi;
}

const Post = ({ data }: IPostProps) => {
  return (
    <div className="flex flex-row w-[300px] h-[500px]">
        <h3 dangerouslySetInnerHTML={{ __html: data.title.rendered }} className="overflow-none" />
        <p dangerouslySetInnerHTML={{ __html: data.content.rendered }} className="overflow-none" />
    </div>
  )
}

export default Post