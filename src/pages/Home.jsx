import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar></Navbar>
      <Main icon={'🏠'} pageName={'Home'}></Main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
