import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import Container from "../Components/Container/Container";

const MainLayout = () => {
  return (
    <>
      <Container>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default MainLayout;
