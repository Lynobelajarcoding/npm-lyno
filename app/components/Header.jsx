"use client";
import styled, { keyframes } from "styled-components";
import { FaSearch, FaBell, FaMoon, FaSun, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

const bellRing = keyframes`
  0%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(-10deg); }
  20%, 40% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
`;

const themeRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  background: transparent;
  width: 100%;
  margin-bottom: 3rem;
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, 
      rgba(15, 23, 42, 0.8), 
      rgba(15, 23, 42, 0.2)
    );
    border-radius: 20px;
    z-index: -1;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 0.9rem 1.5rem;
  border-radius: 16px;
  width: 450px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  &:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    background: rgba(255, 255, 255, 0.08);
  }

  input {
    background: transparent;
    border: none;
    color: var(--foreground);
    margin-left: 1rem;
    width: 100%;
    outline: none;
    font-family: inherit;
    font-size: 0.95rem;

    &::placeholder {
      color: var(--gray);
    }
  }

  svg {
    color: var(--gray);
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--foreground);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  svg {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  &:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
    
    &::before {
      opacity: 1;
    }
    
    svg {
      color: #fff;
    }
  }
`;

const BellButton = styled(IconButton)`
  &:hover svg {
    animation: ${bellRing} 0.5s ease-in-out;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    right: 8px;
    width: 8px;
    height: 8px;
    background: #ef4444;
    border-radius: 50%;
    border: 2px solid var(--dark);
  }
`;

const ThemeButton = styled(IconButton)`
  svg {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover svg {
    animation: ${themeRotate} 0.6s ease-in-out;
  }
`;

const UpgradeButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 14px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.5);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <HeaderContainer>
      <SearchBar>
        <FaSearch />
        <input type="text" placeholder="Cari komponen, dokumentasi..." />
      </SearchBar>

      <Actions>
        <ThemeButton onClick={toggleTheme} title="Ganti Tema">
          {isDark ? <FaSun /> : <FaMoon />}
        </ThemeButton>
        <BellButton title="Notifikasi">
          <FaBell />
        </BellButton>
        <UpgradeButton>
          <FaStar /> Upgrade Pro
        </UpgradeButton>
      </Actions>
    </HeaderContainer>
  );
}
