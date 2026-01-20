"use client";
import styled, { keyframes } from "styled-components";
import { FaCopy, FaCheck, FaTerminal } from "react-icons/fa";
import { useState } from "react";

const successPop = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const Container = styled.div`
  margin-top: 6rem;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(51, 65, 85, 0.3));
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    animation: ${shimmer} 3s infinite;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--light);
  background: linear-gradient(135deg, #fff, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  svg {
    color: var(--primary);
  }
`;

const CodeBlock = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Fira Code', 'Courier New', monospace;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
  }
`;

const Command = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .prompt {
    color: #22c55e;
    font-size: 1.2rem;
    font-weight: 700;
  }
  
  .cmd {
    color: #60a5fa;
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  .package {
    color: #f472b6;
    font-size: 1.1rem;
  }
`;

const CopyButton = styled.button`
  background: ${({ $copied }) =>
    $copied
      ? 'linear-gradient(135deg, #22c55e, #16a34a)'
      : 'rgba(255, 255, 255, 0.05)'
  };
  border: 2px solid ${({ $copied }) =>
    $copied
      ? '#22c55e'
      : 'rgba(255, 255, 255, 0.1)'
  };
  color: ${({ $copied }) =>
    $copied
      ? '#fff'
      : 'var(--gray)'
  };
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  font-size: 0.95rem;
  white-space: nowrap;
  
  svg {
    font-size: 1.1rem;
    animation: ${({ $copied }) => $copied ? successPop : 'none'} 0.3s ease;
  }

  &:hover {
    background: ${({ $copied }) =>
    $copied
      ? 'linear-gradient(135deg, #22c55e, #16a34a)'
      : 'rgba(255, 255, 255, 0.1)'
  };
    border-color: ${({ $copied }) =>
    $copied
      ? '#22c55e'
      : 'var(--primary)'
  };
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Description = styled.p`
  margin-top: 1.5rem;
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: center;
`;

export default function Installation() {
  const [copied, setCopied] = useState(false);
  const command = "npm install styled-lyno";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container id="install">
      <Header>
        <Title>
          <FaTerminal /> Instalasi Cepat
        </Title>
      </Header>
      <CodeBlock>
        <Command>
          <span className="prompt">$</span>
          <span className="cmd">npm install</span>
          <span className="package">styled-lyno</span>
        </Command>
        <CopyButton onClick={handleCopy} $copied={copied}>
          {copied ? (
            <>
              <FaCheck /> Tersalin!
            </>
          ) : (
            <>
              <FaCopy /> Salin
            </>
          )}
        </CopyButton>
      </CodeBlock>
      <Description>
        Instal library dengan satu perintah dan mulai membangun aplikasi yang menakjubkan
      </Description>
    </Container>
  );
}
