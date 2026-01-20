"use client";
import styled, { keyframes } from "styled-components";
import { FaArrowRight, FaPlay, FaStar } from "react-icons/fa";
import Link from "next/link";

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(79, 70, 229, 0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const HeroContainer = styled.section`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(79, 70, 229, 0.15), transparent);
    border-radius: 50%;
    filter: blur(60px);
    animation: ${float} 6s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent);
    border-radius: 50%;
    filter: blur(60px);
    animation: ${float} 8s ease-in-out infinite;
    animation-delay: 1s;
  }
`;

const Badge = styled.span`
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(139, 92, 246, 0.15));
  color: var(--accent);
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  width: fit-content;
  margin-bottom: 2rem;
  border: 2px solid rgba(79, 70, 229, 0.3);
  animation: ${pulse} 2s ease-in-out infinite;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
`;

const Title = styled.h2`
  font-size: 4.5rem;
  line-height: 1.1;
  font-weight: 900;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  .gradient-text {
    background: linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 25%,
      #f093fb 50%,
      #4facfe 75%,
      #667eea 100%
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientShift} 5s ease infinite;
    font-weight: 900;
  }
  
  .white-text {
    background: linear-gradient(to right, #fff, #e2e8f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: var(--gray);
  max-width: 650px;
  margin-bottom: 3rem;
  line-height: 1.8;
  position: relative;
  z-index: 1;
  opacity: 0.9;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  padding: 1.2rem 3rem;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
    
    &::before {
      left: 100%;
    }
    
    svg {
      transform: translateX(4px);
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1);
  }
`;

const SecondaryButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  color: var(--light);
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 1.2rem 2.5rem;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--gray);
    font-size: 0.95rem;
  }
`;

export default function Hero({ onGetStarted }) {
  return (
    <HeroContainer>
      <Badge>
        <FaStar /> v2.0 Kini Tersedia
      </Badge>
      <Title>
        <span className="white-text">Bangun lebih cepat dengan</span>
        <br />
        <span className="gradient-text">Alat Generasi Berikutnya</span>
      </Title>
      <Description>
        Rasakan masa depan pengembangan web. Fondasi yang kuat, fleksibel, dan modern
        untuk proyek besar Anda berikutnya. Didukung oleh teknologi terkini.
      </Description>
      <CTAGroup>
        <PrimaryButton as={Link} href="/dashboard">
          Mulai Sekarang <FaArrowRight />
        </PrimaryButton>
        <SecondaryButton>
          <FaPlay /> Lihat Demo
        </SecondaryButton>
      </CTAGroup>
      <Stats>
        <StatItem>
          <h3>50+</h3>
          <p>Komponen Siap Pakai</p>
        </StatItem>
        <StatItem>
          <h3>10K+</h3>
          <p>Developer Menggunakan</p>
        </StatItem>
        <StatItem>
          <h3>99%</h3>
          <p>Tingkat Kepuasan</p>
        </StatItem>
      </Stats>
    </HeroContainer>
  );
}
