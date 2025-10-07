import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content pt-5 pb-3">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by <b>Home Decor</b>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
