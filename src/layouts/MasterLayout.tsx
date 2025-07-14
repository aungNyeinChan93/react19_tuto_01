import React, { type ReactNode } from "react";
import SideBar from "./SideBar";

const MasterLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <section className="flex felx-col sm:flex-row justify-between  lg:mx-[100px]  ">
        <SideBar />
        <main className=" bg-slate-200 w-full h-screen  p-3">{children}</main>
      </section>
    </React.Fragment>
  );
};

export default MasterLayout;
