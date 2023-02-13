import { NextPage } from 'next'
import { getAuthed } from '../utils/getAuthed';
import PostTable from "../components/PostTable"
import React from 'react'
import Header from '../components/Layout/Header';

const Posts: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <PostTable />
    </div>
  )
}

export const getServerSideProps = getAuthed;

export default Posts