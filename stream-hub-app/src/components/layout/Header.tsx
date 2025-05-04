"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaUserCircle, FaAngleDown, FaBars } from "react-icons/fa";

const mobileBreakpoint = "768px";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  background-color: #000;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  @media (max-width: ${mobileBreakpoint}) {
    padding: 0.8rem 1rem;
  }
`;

const iconButtonStyles = `
  background: none;
  border: none;
  color: #e0e0e0;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }
`;

const MobileMenuButton = styled.button`
  ${iconButtonStyles}
  display: none;

  @media (max-width: ${mobileBreakpoint}) {
    display: inline-flex;
    font-size: 1.6rem;
  }
`;

const LogoContainer = styled.div`
  margin-right: 2rem;

  img {
    height: 35px;
    display: block;
  }

  @media (max-width: ${mobileBreakpoint}) {
    margin-right: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    img {
      height: 30px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-grow: 1;

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

const NavItem = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  transition: color 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    color: #fff;
  }
`;

const DropdownIcon = styled(FaAngleDown)`
  font-size: 0.8em;
  margin-top: 2px;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: calc(${mobileBreakpoint} + 1px)) {
    gap: 1.5rem;
  }
`;

const IconButton = styled.button`
  ${iconButtonStyles}

  &:last-child {
    font-size: 1.7rem;
  }
`;

const MobileMenuContainer = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #222;
  color: white;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 10;
  a {
    display: block;
    padding: 0.8rem 1rem;
    color: #e0e0e0;
    text-decoration: none;
    &:hover {
      background-color: #333;
      color: #fff;
    }
  }
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoUrl = "/logo-placeholder.svg";

  const handleSearchClick = () => console.log("Search clicked");
  const handleProfileClick = () => console.log("Profile clicked");
  const handleNavClick =
    (itemName: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      console.log(`${itemName} clicked`);
      setIsMobileMenuOpen(false);
    };
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <HeaderWrapper>
      <MobileMenuButton onClick={toggleMobileMenu} aria-label="Open menu">
        <FaBars />
      </MobileMenuButton>

      <LogoContainer>
        <img src={logoUrl} alt="Logo" />
      </LogoContainer>

      <Nav>
        <NavItem href="#" onClick={handleNavClick("Categorias")}>
          Categorias <DropdownIcon />
        </NavItem>
        <NavItem href="#" onClick={handleNavClick("Assuntos")}>
          Assuntos <DropdownIcon />
        </NavItem>
        <NavItem href="#" onClick={handleNavClick("Outras páginas")}>
          Outras páginas <DropdownIcon />
        </NavItem>
        <NavItem href="#" onClick={handleNavClick("Minha Lista")}>
          Minha Lista
        </NavItem>
        <NavItem href="#" onClick={handleNavClick("Lives")}>
          Lives
        </NavItem>
        <NavItem href="#" onClick={handleNavClick("Fórum")}>
          Fórum
        </NavItem>
      </Nav>

      <ActionsContainer>
        <IconButton onClick={handleSearchClick} aria-label="Search">
          <FaSearch />
        </IconButton>
        <IconButton onClick={handleProfileClick} aria-label="User Profile">
          <FaUserCircle />
        </IconButton>
      </ActionsContainer>

      <MobileMenuContainer $isOpen={isMobileMenuOpen}>
        <a href="#" onClick={handleNavClick("Categorias")}>
          Categorias
        </a>
        <a href="#" onClick={handleNavClick("Assuntos")}>
          Assuntos
        </a>
        <a href="#" onClick={handleNavClick("Outras páginas")}>
          Outras páginas
        </a>
        <a href="#" onClick={handleNavClick("Minha Lista")}>
          Minha Lista
        </a>
        <a href="#" onClick={handleNavClick("Lives")}>
          Lives
        </a>
        <a href="#" onClick={handleNavClick("Fórum")}>
          Fórum
        </a>
        <hr style={{ borderColor: "#444", margin: "0.5rem 0" }} />
      </MobileMenuContainer>
    </HeaderWrapper>
  );
};

export default Header;
