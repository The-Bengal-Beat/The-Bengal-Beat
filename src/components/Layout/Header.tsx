import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  const session = useSession();

  return (
    <AppBar position="relative" component="nav">
      <Toolbar>
        <Link href="/">Hello, {session.data?.user?.name}</Link>
        <Link href="/posts" className="px-8">
          Posts
        </Link>
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
