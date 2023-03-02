import { NextPage } from 'next'
import { getAuthed } from '../utils/getAuthed';
import PostTable from "../components/PostTable"
import React from 'react'
import Page from '../components/Layout/Page';

const Posts: NextPage = () => {
  return (
    <Page>
      <PostTable />
    </Page>
  )
}

export const getServerSideProps = getAuthed;

export default Posts