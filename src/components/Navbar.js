import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">MySite</div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/additem">Add Item</a></li>
          <li><a href="/viewitems">ViewItems</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
