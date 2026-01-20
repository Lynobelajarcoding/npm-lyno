"use client";
import styled, { keyframes } from "styled-components";
import { FaArrowRight, FaShoppingCart, FaDownload } from "react-icons/fa";

// Animations
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const shine = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

// Common Button Base
const ButtonBase = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Variant 1: Primary Button
const PrimaryButton = styled(ButtonBase)`
  background: ${props => props.$bgColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Variant 2: Outline Button
const OutlineButton = styled(ButtonBase)`
  background: transparent;
  color: ${props => props.$color || '#667eea'};
  padding: 0.9rem 1.8rem;
  border-radius: 12px;
  font-size: 1rem;
  border: 2px solid ${props => props.$color || '#667eea'};
  
  &:hover {
    background: ${props => props.$color || '#667eea'};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }
`;

// Variant 3: Icon Button
const IconButton = styled(ButtonBase)`
  background: ${props => props.$bgColor || '#1a1a1a'};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  font-size: 0.95rem;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: ${props => props.$hoverBg || '#333'};
    
    svg {
      transform: translateX(4px);
    }
  }
`;

export default function ButtonVariant({
  variant = "primary",
  children = "Click Me",
  icon,
  onClick,
  disabled = false,
  bgColor,
  color,
  hoverBg,
  ...props
}) {
  const defaultIcons = {
    primary: <FaArrowRight />,
    outline: <FaShoppingCart />,
    icon: <FaDownload />
  };

  const ButtonComponent = {
    primary: PrimaryButton,
    outline: OutlineButton,
    icon: IconButton
  }[variant] || PrimaryButton;

  return (
    <ButtonComponent
      onClick={onClick}
      disabled={disabled}
      $bgColor={bgColor}
      $color={color}
      $hoverBg={hoverBg}
      {...props}
    >
      {children}
      {icon || defaultIcons[variant]}
    </ButtonComponent>
  );
}
