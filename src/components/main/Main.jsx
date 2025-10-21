import React from "react";

const Main = ({pageName, icon}) => {
  return (
    <main className="flex-1 flex items-center justify-center bg-gradient-to-bl from-[#471396]  to-[#B13BFF]">
      <div className="">
        <h1 className="font-bold text-5xl animate-bounce text-white">
          {icon} This is {pageName} Pages{" "}
        </h1>
      </div>
    </main>
  );
};

export default Main;
