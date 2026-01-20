"use client";
import styled, { keyframes } from "styled-components";
import { FaGithub, FaTwitter, FaDiscord, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from "react-icons/fa";

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const FooterContainer = styled.footer`
  margin-top: 8rem;
  padding: 4rem 0 2rem;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 32px 32px 0 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent, 
      var(--primary), 
      var(--secondary), 
      transparent
    );
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SectionTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--light);
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BrandSection = styled(FooterSection)`
  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.8rem;
  }
  
  p {
    color: var(--gray);
    line-height: 1.8;
    font-size: 0.95rem;
  }
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterLink = styled.a`
  color: var(--gray);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '→';
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: var(--primary);
    padding-left: 1rem;
    
    &::before {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const NewsletterSection = styled(FooterSection)`
  p {
    color: var(--gray);
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const NewsletterForm = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  
  input {
    flex: 1;
    padding: 0.8rem 1.2rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: var(--light);
    font-family: inherit;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: var(--primary);
      background: rgba(255, 255, 255, 0.1);
    }
    
    &::placeholder {
      color: var(--gray);
    }
  }
`;

const SubscribeButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.4);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.1), 
    transparent
  );
  margin: 2rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: var(--gray);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #ef4444;
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray);
  font-size: 1.2rem;
  transition: all 0.3s ease;
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
  }
  
  &:hover {
    transform: translateY(-4px);
    border-color: var(--primary);
    color: white;
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
`;

const QuickLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    font-size: 0.9rem;
    color: var(--gray);
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: var(--light);
      text-decoration: underline;
    }
  }
  
  @media (max-width: 640px) {
    gap: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <h3>DANNZZ</h3>
          <p>
            Membangun pengalaman digital yang luar biasa dengan teknologi modern
            dan desain yang memukau. Kualitas adalah prioritas kami.
          </p>
        </BrandSection>

        <FooterSection>
          <SectionTitle>Produk</SectionTitle>
          <LinkList>
            <FooterLink href="#">Components</FooterLink>
            <FooterLink href="#">Templates</FooterLink>
            <FooterLink href="#">Design System</FooterLink>
            <FooterLink href="#">Documentation</FooterLink>
          </LinkList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Perusahaan</SectionTitle>
          <LinkList>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </LinkList>
        </FooterSection>

        <NewsletterSection>
          <SectionTitle>Newsletter</SectionTitle>
          <p>
            Dapatkan update terbaru tentang produk dan fitur kami langsung ke inbox Anda.
          </p>
          <NewsletterForm>
            <input type="email" placeholder="Email Anda" />
            <SubscribeButton>
              Subscribe
            </SubscribeButton>
          </NewsletterForm>
        </NewsletterSection>
      </FooterContent>

      <Divider />

      <FooterBottom>
        <Copyright>
          © 2025 DANNZZ. Made with <FaHeart /> by Dannzz Team.
        </Copyright>

        <QuickLinks>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </QuickLinks>

        <SocialLinks>
          <SocialIcon href="#"><FaGithub /></SocialIcon>
          <SocialIcon href="#"><FaTwitter /></SocialIcon>
          <SocialIcon href="#"><FaLinkedin /></SocialIcon>
          <SocialIcon href="#"><FaInstagram /></SocialIcon>
          <SocialIcon href="#"><FaDiscord /></SocialIcon>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
}
