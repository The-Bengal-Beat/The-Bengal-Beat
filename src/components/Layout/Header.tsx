import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>
}

const Header: React.FC<IProps> = ({ drawerOpen, setDrawerOpen }) => {
  const session = useSession();
  
  return (
    <AppBar position="relative" component="nav">
      <Toolbar className="h-full w-full flex">
        <IconButton className="h-full flex items-center m-2" onClick={() => setDrawerOpen(!drawerOpen)}>
          <MenuIcon className="fill-white"/>
        </IconButton>
        <Link href="/">Hello, {session.data?.user?.name}</Link>
        <Box className="grow" />
        <Box className="justify-self-end">
          <Button
            onClick={() => signOut({ callbackUrl: "/auth/sign-in"})}
          >
            Sign Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
