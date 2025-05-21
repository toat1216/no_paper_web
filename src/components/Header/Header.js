import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${({ isScrolled }) =>
    isScrolled ? "#ffffff" : "transparent"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ isScrolled }) => (isScrolled ? "#333" : "#ffffff")};
  transition: color 0.3s ease;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ isScrolled }) => (isScrolled ? "#333" : "#ffffff")};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #ffffff;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ isScrolled }) => (isScrolled ? "#333" : "#ffffff")};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // 초기 스크롤 위치 확인
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Nav>
        <Logo to="/" isScrolled={isScrolled}>
          회사명
        </Logo>
        <MenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          isScrolled={isScrolled}
        >
          ☰
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            isScrolled={isScrolled}
          >
            홈
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            isScrolled={isScrolled}
          >
            회사소개
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setIsMenuOpen(false)}
            isScrolled={isScrolled}
          >
            제품소개
          </NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
