"use client";
import styled from "styled-components";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Installation from "./components/Installation";
import Footer from "./components/Footer";
import ButtonVariant from "./components/ButtonVariant";
import CardVariant from "./components/CardVariant";
import HeaderVariant from "./components/HeaderVariant";
import FooterVariant from "./components/FooterVariant";
import SidebarVariant from "./components/SidebarVariant";
import CodeDisplay from "./components/CodeDisplay";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: radial-gradient(circle at top left, #1e1b4b, #0f172a);
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 280px;
  padding: 0 4rem;
  min-height: 100vh;
  position: relative;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 3rem;
`;

const Section = styled.section`
  margin: 6rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin: 3rem 0;
  color: var(--light);
  text-align: center;
  font-weight: 800;
`;

const VariantLabel = styled.div`
  text-align: center;
  margin: 3rem 0 2rem;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #94a3b8;
    font-size: 1rem;
  }
`;

const PreviewContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
`;

export default function Home() {
  const [activeItem, setActiveItem] = useState("home");

  const handleSidebarSelect = (item) => {
    setActiveItem(item);

    // Navigate to dashboard for component demos
    if (item !== "home") {
      window.location.href = `/dashboard?tab=${item}`;
    }
  };

  return (
    <Layout>
      <Sidebar activeItem={activeItem} onSelect={handleSidebarSelect} />
      <MainContent>
        <Header />
        <ContentWrapper>
          <Hero />
          <Installation />

          {/* Quick Preview Section */}
          <Section>
            <SectionTitle>Component Showcase</SectionTitle>

            <VariantLabel>
              <h3>Button Components</h3>
              <p>Multiple button styles for different use cases</p>
            </VariantLabel>
            <PreviewContainer>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <ButtonVariant variant="primary">Primary Button</ButtonVariant>
                <ButtonVariant variant="outline">Outline Button</ButtonVariant>
                <ButtonVariant variant="icon">Icon Button</ButtonVariant>
              </div>
            </PreviewContainer>
            <CodeDisplay
              title="Button Usage Example"
              code={`import { ButtonVariant } from 'styled-lyno';

<ButtonVariant variant="primary">Click Me</ButtonVariant>
<ButtonVariant variant="outline">Learn More</ButtonVariant>
<ButtonVariant variant="icon">Download</ButtonVariant>`}
            />

            <VariantLabel>
              <h3>Card Components</h3>
              <p>Beautiful cards for various content types</p>
            </VariantLabel>
            <PreviewContainer>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <CardVariant variant="product" />
                <CardVariant variant="profile" />
              </div>
            </PreviewContainer>
            <CodeDisplay
              title="Card Usage Example"
              code={`import { CardVariant } from 'styled-lyno';

<CardVariant 
  variant="product"
  title="Product Name"
  description="Product description"
  price="$99"
/>

<CardVariant 
  variant="profile"
  name="John Doe"
  role="Developer"
/>`}
            />

            <div style={{
              textAlign: 'center',
              marginTop: '4rem',
              padding: '3rem',
              background: 'rgba(102, 126, 234, 0.1)',
              borderRadius: '20px',
              border: '1px solid rgba(102, 126, 234, 0.3)'
            }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#667eea' }}>
                Explore All Components
              </h3>
              <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>
                Click sidebar menu to view all component variants and usage examples
              </p>
              <ButtonVariant
                variant="primary"
                onClick={() => window.location.href = '/dashboard?tab=header'}
              >
                View Full Documentation
              </ButtonVariant>
            </div>
          </Section>

          <Footer />
        </ContentWrapper>
      </MainContent>
    </Layout>
  );
}