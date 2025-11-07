import React from "react";
import "./Header.css";
import Info from "./Info/Info";
import Logo from "./Logo/Logo";
import TopNav from "./TopNav/TopNav";
import DownNav from "./DownNav/DownNav";

function Header() {
  return (
    <div className="Header w-100 px-0 yx-0">
      <Info />
      <TopNav />
      <Logo />
      <DownNav />
    </div>
  );
}

export default Header;
