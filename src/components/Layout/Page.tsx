import Drawer2 from "./Drawer";
import React, { ReactNode, useState } from "react";
import Header from "./Header";

const Page: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  
  return (
    <div className="flex h-full w-full flex-row">
      <Drawer2 drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className="flex h-full w-full flex-col">
        <Header drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        {children}
      </div>
    </div>
  );
};

export default Page;
