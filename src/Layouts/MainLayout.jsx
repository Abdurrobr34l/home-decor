import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import Container from "../Components/Container/Container";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1">
      <Container>
          <Outlet></Outlet>
      </Container>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default MainLayout;
