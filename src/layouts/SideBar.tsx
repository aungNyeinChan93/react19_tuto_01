import React from "react";

const SideBar = () => {
  return (
    <React.Fragment>
      <aside className="hidden sm:block md:w-1/5 bg-slate-600 pb-10  h-screen p-3">
        <h3 className="!bg-indigo-400 p-2 rounded-t-2xl text-2xl font-semibold text-center ">
          Brand
        </h3>

        <div className="flex flex-col justify-between items-center h-full">
          <div className="">
            <ul className=" p-4">
              <li className=" text-black hover:text-slate-600 hover:bg-indigo-300 rounded-lg p-3 text-sm">
                Home
              </li>
              <li className=" text-black hover:text-slate-600 hover:bg-indigo-300 rounded-lg p-3 text-sm">
                About
              </li>
              <li className=" text-black hover:text-slate-600 hover:bg-indigo-300 rounded-lg p-3 text-sm">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <ul className=" p-4">
              <li className=" text-black hover:text-slate-600 hover:bg-indigo-300 rounded-lg p-3 text-sm">
                Home
              </li>
              <li className=" text-black hover:text-slate-600 hover:bg-indigo-300 rounded-lg p-3 text-sm">
                About
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default SideBar;
