import React from "react";
import Container from "./Container/Container";

const Footer = () => {
  return (
    <Container>
      <footer className="footer sm:footer-horizontal footer-center text-base-content pt-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <b>Home Decor</b>
          </p>
        </aside>
      </footer>
    </Container>
  );
};

export default Footer;
