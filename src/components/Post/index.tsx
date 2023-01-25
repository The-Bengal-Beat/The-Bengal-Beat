import React, { FC } from 'react'
import { IPostFromApi } from '../../types'

interface IPostProps {
    data: IPostFromApi;
}

const Post: FC<IPostProps> = ({ data }) => {
  
  return (
    <div className="flex w-[300px] h-[500px]">
        <h3>{data.title.rendered}</h3>
        <p>{data.content.rendered}</p>
    </div>
  )
}

export default Post