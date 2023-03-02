import { Divider, Drawer, IconButton } from '@mui/material'
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react'
import { ChevronLeft } from '@mui/icons-material';

interface IProps {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer2: React.FC<IProps> = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={drawerOpen}
    >
      <div className="w-[300px] h-[64px] flex justify-end">
        <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
          <ChevronLeft className="fill-white"/>
        </IconButton>
      </div>
      <Divider />
      <Link className="m-2 text-base" href="/posts">Posts</Link>
    </Drawer>
  )
}

export default Drawer2