"use client";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// Variant 1: Simple Footer
const SimpleFooter = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 3rem 4rem;
  margin-top: 4rem;
`;

const SimpleContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #999;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all 0.3s;
    
    &:hover {
      background: #667eea;
      transform: translateY(-3px);
    }
  }
`;

// Variant 2: Multi-Column Footer
const MultiColumnFooter = styled.footer`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 4rem 4rem 2rem;
  margin-top: 4rem;
`;

const FooterGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FooterColumn = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  p, a {
    color: #999;
    text-decoration: none;
    font-size: 0.9rem;
    line-height: 2;
    display: block;
    transition: color 0.3s;
  }
  
  a:hover {
    color: #667eea;
  }
`;

const FooterBottom = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #999;
  font-size: 0.9rem;
`;

// Variant 3: Newsletter Footer
const NewsletterFooter = styled.footer`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4rem 4rem;
  margin-top: 4rem;
  text-align: center;
`;

const NewsletterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 800;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.95;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto 2rem;
  
  input {
    flex: 1;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
    }
  }
  
  button {
    padding: 1rem 2rem;
    background: #1a1a1a;
    color: white;
    border: none;
    border-radius: 50px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }
  }
`;

export default function FooterVariant({
  variant = "simple",
  companyName = "Your Company",
  year = new Date().getFullYear(),
  socialLinks = {
    facebook: "#",
    twitter: "#",
    instagram: "#"
  },
  // Multi-column props
  description = "Building amazing digital experiences with modern technology.",
  companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" }
  ],
  productLinks = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "FAQ", href: "#" }
  ],
  legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" }
  ],
  // Newsletter props
  newsletterTitle = "Subscribe to Our Newsletter",
  newsletterDescription = "Get the latest updates and exclusive offers.",
  onNewsletterSubmit,
  ...props
}) {
  if (variant === "simple") {
    return (
      <SimpleFooter {...props}>
        <SimpleContent>
          <Copyright>
            © {year} {companyName}. All rights reserved.
          </Copyright>
          <SocialLinks>
            {socialLinks.facebook && (
              <a href={socialLinks.facebook}><FaFacebook /></a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter}><FaTwitter /></a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram}><FaInstagram /></a>
            )}
          </SocialLinks>
        </SimpleContent>
      </SimpleFooter>
    );
  }

  if (variant === "multi-column") {
    return (
      <MultiColumnFooter {...props}>
        <FooterGrid>
          <FooterColumn>
            <h4>{companyName}</h4>
            <p>{description}</p>
            <SocialLinks style={{ marginTop: '1rem' }}>
              {socialLinks.facebook && (
                <a href={socialLinks.facebook}><FaFacebook /></a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter}><FaTwitter /></a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram}><FaInstagram /></a>
              )}
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <h4>Company</h4>
            {companyLinks.map((link, idx) => (
              <a key={idx} href={link.href}>{link.label}</a>
            ))}
          </FooterColumn>

          <FooterColumn>
            <h4>Product</h4>
            {productLinks.map((link, idx) => (
              <a key={idx} href={link.href}>{link.label}</a>
            ))}
          </FooterColumn>

          <FooterColumn>
            <h4>Legal</h4>
            {legalLinks.map((link, idx) => (
              <a key={idx} href={link.href}>{link.label}</a>
            ))}
          </FooterColumn>
        </FooterGrid>

        <FooterBottom>
          © {year} {companyName}. All rights reserved.
        </FooterBottom>
      </MultiColumnFooter>
    );
  }

  if (variant === "newsletter") {
    return (
      <NewsletterFooter {...props}>
        <NewsletterContent>
          <h3>{newsletterTitle}</h3>
          <p>{newsletterDescription}</p>
          <NewsletterForm onSubmit={(e) => {
            e.preventDefault();
            onNewsletterSubmit?.();
          }}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </NewsletterForm>
          <Copyright style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            © {year} {companyName}. All rights reserved.
          </Copyright>
        </NewsletterContent>
      </NewsletterFooter>
    );
  }

  return null;
}
