"use client";
import styled from "styled-components";
import { FaSearch, FaBars, FaShoppingCart, FaUser } from "react-icons/fa";

// Variant 1: Modern Header
const ModernHeader = styled.header`
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 4rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const ModernNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: #333;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
    
    &:hover {
      color: #667eea;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const IconBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  
  &:hover {
    color: #667eea;
  }
  
  .badge {
    position: absolute;
    top: 0;
    right: 0;
    background: #ff6b6b;
    color: white;
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
    border-radius: 10px;
  }
`;

const LoginBtn = styled.button`
  padding: 0.7rem 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;

// Variant 2: Transparent Header
const TransparentHeader = styled.header`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 1.5rem 4rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  color: white;
`;

// Variant 3: Centered Header
const CenteredHeader = styled.header`
  background: #f8f9fa;
  padding: 1.5rem 4rem;
  text-align: center;
`;

const CenteredLogo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const CenteredNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  
  a {
    color: #333;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
    
    &:hover {
      color: #667eea;
    }
  }
`;

export default function HeaderVariant({
  variant = "modern",
  logo = "BRAND",
  menuItems = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" }
  ],
  cartCount = 3,
  showSearch = true,
  onLoginClick,
  ...props
}) {
  if (variant === "modern") {
    return (
      <ModernHeader {...props}>
        <ModernNav>
          <Logo>{logo}</Logo>
          <NavLinks>
            {menuItems.map((item, idx) => (
              <a key={idx} href={item.href}>{item.label}</a>
            ))}
          </NavLinks>
          <NavActions>
            {showSearch && (
              <IconBtn>
                <FaSearch />
              </IconBtn>
            )}
            <IconBtn>
              <FaShoppingCart />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </IconBtn>
            <IconBtn>
              <FaUser />
            </IconBtn>
            <LoginBtn onClick={onLoginClick}>Login</LoginBtn>
          </NavActions>
        </ModernNav>
      </ModernHeader>
    );
  }

  if (variant === "transparent") {
    return (
      <TransparentHeader {...props}>
        <ModernNav>
          <Logo style={{ color: 'white' }}>{logo}</Logo>
          <NavLinks>
            {menuItems.map((item, idx) => (
              <a key={idx} href={item.href} style={{ color: 'white' }}>{item.label}</a>
            ))}
          </NavLinks>
          <NavActions>
            <LoginBtn onClick={onLoginClick}>Get Started</LoginBtn>
          </NavActions>
        </ModernNav>
      </TransparentHeader>
    );
  }

  if (variant === "centered") {
    return (
      <CenteredHeader {...props}>
        <CenteredLogo>{logo}</CenteredLogo>
        <CenteredNav>
          {menuItems.map((item, idx) => (
            <a key={idx} href={item.href}>{item.label}</a>
          ))}
        </CenteredNav>
      </CenteredHeader>
    );
  }

  return null;
}
