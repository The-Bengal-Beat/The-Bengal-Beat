import Drawer2 from "./Drawer";
import React, { ReactNode } from "react";
import Header from "./Header";

const Page: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-row">
      <Drawer2 />
      <div className="flex h-full w-full flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Page;
