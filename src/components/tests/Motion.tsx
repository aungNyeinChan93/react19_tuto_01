import React, { type ReactNode } from "react";

const Motion: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <section className="flex h-screen justify-center items-center bg-slate-700 text-white">
        {children}
      </section>
    </React.Fragment>
  );
};

export default Motion;
