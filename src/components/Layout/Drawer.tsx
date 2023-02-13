import { Divider, Drawer, IconButton } from '@mui/material'
import ChevronRightIcon from "@mui/material/Icon"
import React, { useState } from 'react'

const Drawer2 = () => {
  const [open, setOpen] = useState(true);

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={open}
    >
      <div className="w-full h-[64px] flex justify-end">
        <IconButton color="inherit" onClick={() => setOpen(!open)}>
          <ChevronRightIcon color="inherit" />
        </IconButton>
      </div>
      <Divider />
      <div className="w-[300px]">Hello</div>
    </Drawer>
  )
}

export default Drawer2