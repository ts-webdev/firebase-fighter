import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar></Navbar>
      <main className="flex-1 flex items-center justify-center bg-gradient-to-bl from-[#471396]  to-[#B13BFF]">
        <div className="">
          <h1 className="font-bold text-5xl animate-bounce text-white">
            🏠 This is Home Pages{" "}
          </h1>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
