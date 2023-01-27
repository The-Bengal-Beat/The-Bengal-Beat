import React from 'react'
import { IPostFromApi } from '../../types'

interface IPostRow {
    data: IPostFromApi;
}

const PostRow: React.FC<IPostRow> = ({ data }) => {
  const date = new Date(data.date_gmt);

  return (
    <div className="flex flex-row w-full h-50px p-2 bg-[#363636]">
        <div className="">
            <p className="text-white text-4 font-semibold">{data.custom_fields.writer?.join(", ")}</p>
            <p className="text-white text-4" dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
        </div>
        <div className="flex-grow"/>
        <p className="text-white text-4">{date.toDateString()}</p>
    </div>
  )
}

export default PostRow