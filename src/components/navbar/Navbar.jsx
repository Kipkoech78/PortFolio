import React, { useState, useEffect } from "react";
import logo from "../../assets/imagedp.webp";
import "./Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import line from "../../assets/brush-line.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  // useEffect(() => {
    
  //   document.body.style.overflow = menuOpen ? "hidden" : "";
  //   return () => { document.body.style.overflow = ""; };
  // }, [menuOpen]);
  const closeMenu =()=> setMenuOpen(false)
  const openMenu =()=> setMenuOpen(true)


  const handleSelect = (id) => {
    setMenu(id);
    closeMenu();
  };

  return (
    <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <img className="image-logo" src={logo} alt="Linus Ngetich logo" />

      <ul className={`navMenu ${menuOpen ? "navMenu-open" : ""}`}>
        <div className="navMenu-header">
          <span className="navMenu-brand">Menu</span>
          <div onClick={closeMenu} className="closeIcon" >
            <CloseIcon fontSize="large" />
          </div>
        </div>

        {navLinks.map((link) => (
          <li key={link.id}>
            <AnchorLink
              className="anchorLink"
              offset={70}
              href={link.href}
              onClick={() => handleSelect(link.id)}
            >
              <p>{link.label}</p>
            </AnchorLink>
            {menu === link.id && <img className="lineImg" src={line} alt="line IMG" />}
          </li>
        ))}
      </ul>

      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

      <div
        onClick={() => window.open("https://github.com/Kipkoech78", "_blank")}
        className="nav-connect"
      >
        <p>GitHub</p>
      </div>
      {!menuOpen && (
        <div onClick={openMenu} className="menu-logo" >
          <MenuOpenIcon fontSize="large" />
        </div>
      )}
{/* 
      <div onClick={() => setMenuOpen(true)} className="menu-logo">
        <MenuOpenIcon fontSize="large" />
      </div> */}
    </div>
  );
}

export default Navbar;