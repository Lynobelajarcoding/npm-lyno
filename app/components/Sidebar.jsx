"use client";
import styled, { keyframes } from "styled-components";
import { FaHome, FaBox, FaDownload, FaCog, FaSignOutAlt, FaRocket, FaLayerGroup, FaCreditCard, FaHandPointer, FaColumns, FaInfoCircle } from "react-icons/fa";

const slideIn = keyframes`
  from {
    transform: translateX(-5px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(79, 70, 229, 0.6);
  }
`;

const Container = styled.aside`
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
  backdrop-filter: blur(20px);
  border-right: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 0 0.5rem;
  color: var(--light);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(4px);
  }
`;

const LogoIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: white;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 16px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${LogoContainer}:hover &::before {
    opacity: 0.5;
    animation: ${glow} 2s ease-in-out infinite;
  }
`;

const LogoText = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
  padding: 0 0.5rem;
`;

const SectionLabel = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  color: var(--gray);
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  padding-left: 1rem;
  letter-spacing: 1.5px;
  font-weight: 700;
  opacity: 0.6;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  color: ${({ $isActive }) => ($isActive ? '#fff' : 'var(--gray)')};
  background: ${({ $isActive }) =>
    $isActive
      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))'
      : 'transparent'
  };
  text-decoration: none;
  border-radius: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: ${({ $isActive }) => ($isActive ? '60%' : '0')};
    background: linear-gradient(180deg, var(--primary), var(--secondary));
    border-radius: 0 4px 4px 0;
    transition: height 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: ${({ $isActive }) =>
    $isActive
      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.25), rgba(118, 75, 162, 0.25))'
      : 'rgba(255, 255, 255, 0.05)'
  };
    color: ${({ $isActive }) => ($isActive ? '#fff' : 'var(--light)')};
    transform: translateX(4px);
    
    &::after {
      opacity: 1;
    }
  }

  svg {
    font-size: 1.3rem;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: ${({ $isActive }) => ($isActive ? 'scale(1.1)' : 'scale(1.05)')};
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  margin: 0 0.5rem;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    transform: translateY(-2px);
  }
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--gradient);
  background-image: url('https://i.pravatar.cc/150?img=12');
  background-size: cover;
  border: 3px solid transparent;
  background-clip: padding-box;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 14px;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 10px;
    height: 10px;
    background: #22c55e;
    border: 2px solid var(--dark);
    border-radius: 50%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  h4 {
    font-size: 0.95rem;
    color: var(--light);
    font-weight: 700;
    margin-bottom: 0.2rem;
  }
  
  span {
    font-size: 0.75rem;
    color: var(--gray);
    font-weight: 500;
    padding: 0.2rem 0.6rem;
    background: rgba(102, 126, 234, 0.2);
    border-radius: 8px;
    width: fit-content;
  }
`;

const LogoutIcon = styled(FaSignOutAlt)`
  margin-left: auto;
  cursor: pointer;
  color: var(--gray);
  transition: all 0.3s ease;
  font-size: 1.1rem;
  
  &:hover {
    color: #ef4444;
    transform: translateX(4px);
  }
`;

export default function Sidebar({ activeItem, onSelect }) {
  const handleSelect = (item) => {
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <Container>
      <LogoContainer>
        <LogoIcon><FaRocket /></LogoIcon>
        <LogoText>LYNO UI</LogoText>
      </LogoContainer>

      <Nav>
        <NavItem $isActive={activeItem === "home"} onClick={() => window.location.href = "/"}>
          <FaHome /> <span>Home</span>
        </NavItem>

        <SectionLabel>Components</SectionLabel>

        <NavItem $isActive={activeItem === "header"} onClick={() => handleSelect("header")}>
          <FaLayerGroup /> <span>Header</span>
        </NavItem>
        <NavItem $isActive={activeItem === "card"} onClick={() => handleSelect("card")}>
          <FaCreditCard /> <span>Card</span>
        </NavItem>
        <NavItem $isActive={activeItem === "button"} onClick={() => handleSelect("button")}>
          <FaHandPointer /> <span>Button</span>
        </NavItem>
        <NavItem $isActive={activeItem === "sidebar"} onClick={() => handleSelect("sidebar")}>
          <FaColumns /> <span>Sidebar</span>
        </NavItem>
        <NavItem $isActive={activeItem === "footer"} onClick={() => handleSelect("footer")}>
          <FaInfoCircle /> <span>Footer</span>
        </NavItem>
      </Nav>

      <UserProfile>
        <Avatar />
        <UserInfo>
          <h4>User Name</h4>
          <span>Pro Member</span>
        </UserInfo>
        <LogoutIcon />
      </UserProfile>
    </Container>
  );
}
