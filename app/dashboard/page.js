"use client";
import styled from "styled-components";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HeaderVariant from "../components/HeaderVariant";
import CardVariant from "../components/CardVariant";
import ButtonVariant from "../components/ButtonVariant";
import FooterVariant from "../components/FooterVariant";
import SidebarVariant from "../components/SidebarVariant";
import CodeDisplay from "../components/CodeDisplay";

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

function DashboardContent() {
    const searchParams = useSearchParams();
    const [activeComponent, setActiveComponent] = useState("header");

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab) {
            setActiveComponent(tab);
        }
    }, [searchParams]);

    const renderComponent = () => {
        switch (activeComponent) {
            case "header":
                return (
                    <>
                        <SectionTitle>Header Variants</SectionTitle>

                        <VariantLabel>
                            <h3>Modern Header</h3>
                            <p>White header with navigation & cart</p>
                        </VariantLabel>
                        <PreviewContainer style={{ display: 'block', padding: 0 }}>
                            <HeaderVariant variant="modern" />
                        </PreviewContainer>
                        <CodeDisplay
                            title="Modern Header Usage"
                            code={`<HeaderVariant 
  variant="modern"
  logo="BRAND"
  menuItems={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" }
  ]}
  cartCount={3}
/>`}
                        />

                        <VariantLabel>
                            <h3>Transparent Header</h3>
                            <p>Dark transparent with blur effect</p>
                        </VariantLabel>
                        <PreviewContainer style={{ display: 'block', padding: 0 }}>
                            <HeaderVariant variant="transparent" />
                        </PreviewContainer>
                        <CodeDisplay
                            title="Transparent Header Usage"
                            code={`<HeaderVariant 
  variant="transparent"
  logo="LOGO"
  menuItems={menuItems}
/>`}
                        />

                        <VariantLabel>
                            <h3>Centered Header</h3>
                            <p>Centered logo with navigation below</p>
                        </VariantLabel>
                        <PreviewContainer style={{ display: 'block', padding: 0 }}>
                            <HeaderVariant variant="centered" />
                        </PreviewContainer>
                        <CodeDisplay
                            title="Centered Header Usage"
                            code={`<HeaderVariant 
  variant="centered"
  logo="BRAND"
  menuItems={[...]}
/>`}
                        />
                    </>
                );

            case "card":
                return (
                    <>
                        <SectionTitle>Card Variants</SectionTitle>

                        <VariantLabel>
                            <h3>Product Card</h3>
                            <p>Perfect for e-commerce products</p>
                        </VariantLabel>
                        <PreviewContainer>
                            <CardVariant variant="product" />
                        </PreviewContainer>
                        <CodeDisplay
                            title="Product Card Usage"
                            code={`<CardVariant 
  variant="product"
  image="https://example.com/product.jpg"
  title="Premium Headphones"
  description="High-quality wireless"
  price="$299"
  buttonText="Add to Cart"
/>`}
                        />

                        <VariantLabel>
                            <h3>Profile Card</h3>
                            <p>User profile with statistics</p>
                        </VariantLabel>
                        <PreviewContainer>
                            <CardVariant variant="profile" />
                        </PreviewContainer>
                        <CodeDisplay
                            title="Profile Card Usage"
                            code={`<CardVariant 
  variant="profile"
  avatar="https://example.com/avatar.jpg"
  name="John Doe"
  role="Senior Developer"
  followers="2.5K"
  projects="48"
/>`}
                        />

                        <VariantLabel>
                            <h3>Blog Card</h3>
                            <p>Article preview with category</p>
                        </VariantLabel>
                        <PreviewContainer>
                            <CardVariant variant="blog" />
                        </PreviewContainer>
                        <CodeDisplay
                            title="Blog Card Usage"
                            code={`<CardVariant 
  variant="blog"
  category="Technology"
  title="Article Title"
  excerpt="Preview text..."
  author="Sarah Johnson"
  date="Jan 15, 2025"
/>`}
                        />
                    </>
                );

            case "button":
                return (
                    <>
                        <SectionTitle>Button Variants</SectionTitle>

                        <VariantLabel>
                            <h3>Primary Button</h3>
                            <p>Gradient background with shine effect</p>
                        </VariantLabel>
                        <PreviewContainer>
                            <ButtonVariant variant="primary">Get Started</ButtonVariant>
                        </PreviewContainer>
                        <CodeDisplay
                            title="Primary Button Usage"
                            code={`<ButtonVariant variant="primary">
  Get Started
</ButtonVariant>`}
                        />

                        <VariantLabel>
                            <h3>Outline Button</h3>
                            <p>Transparent with border, fills on hover</p>
                        </VariantLabel>
                        <PreviewContainer>
                            <ButtonVariant variant="outline">Add to Cart</ButtonVariant>
                        </PreviewContainer>
                        <CodeDisplay
                            title="Outline Button Usage"
                            code={`<ButtonVariant variant="outline">
  Add to Cart
</ButtonVariant>`}
                        />

                        <VariantLabel>
                            <h3>Icon Button</h3>
                            <p>Dark button with icon animation</p>
                        </VariantLabel>
                        <PreviewContainer>
                            <ButtonVariant variant="icon">Download Now</ButtonVariant>
                        </PreviewContainer>
                        <CodeDisplay
                            title="Icon Button Usage"
                            code={`<ButtonVariant variant="icon">
  Download Now
</ButtonVariant>`}
                        />
                    </>
                );

            case "footer":
                return (
                    <>
                        <SectionTitle>Footer Variants</SectionTitle>

                        <VariantLabel>
                            <h3>Simple Footer</h3>
                            <p>Minimal footer with social links</p>
                        </VariantLabel>
                        <PreviewContainer style={{ display: 'block', padding: 0 }}>
                            <FooterVariant variant="simple" />
                        </PreviewContainer>
                        <CodeDisplay
                            title="Simple Footer Usage"
                            code={`<FooterVariant 
  variant="simple"
  companyName="Your Company"
  socialLinks={{
    facebook: "#",
    twitter: "#"
  }}
/>`}
                        />

                        <VariantLabel>
                            <h3>Multi-Column Footer</h3>
                            <p>Full-featured footer with sections</p>
                        </VariantLabel>
                        <PreviewContainer style={{ display: 'block', padding: 0 }}>
                            <FooterVariant variant="multi-column" />
                        </PreviewContainer>
                        <CodeDisplay
                            title="Multi-Column Footer Usage"
                            code={`<FooterVariant 
  variant="multi-column"
  companyName="My Company"
  description="Building amazing products"
  companyLinks={[...]}
  productLinks={[...]}
/>`}
                        />

                        <VariantLabel>
                            <h3>Newsletter Footer</h3>
                            <p>Footer with newsletter subscription</p>
                        </VariantLabel>
                        <PreviewContainer style={{ display: 'block', padding: 0 }}>
                            <FooterVariant variant="newsletter" />
                        </PreviewContainer>
                        <CodeDisplay
                            title="Newsletter Footer Usage"
                            code={`<FooterVariant 
  variant="newsletter"
  newsletterTitle="Subscribe"
  newsletterDescription="Get updates"
  onNewsletterSubmit={handleSubmit}
/>`}
                        />
                    </>
                );

            case "sidebar":
                return (
                    <>
                        <SectionTitle>Sidebar Variants</SectionTitle>

                        <VariantLabel>
                            <h3>All Sidebar Variants</h3>
                            <p>Dark, Light, and Minimal sidebar styles</p>
                        </VariantLabel>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <div>
                                <h4 style={{ color: '#667eea', textAlign: 'center', marginBottom: '1rem', fontSize: '1.2rem' }}>Dark Sidebar</h4>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    height: '500px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <SidebarVariant variant="dark" />
                                </div>
                            </div>

                            <div>
                                <h4 style={{ color: '#667eea', textAlign: 'center', marginBottom: '1rem', fontSize: '1.2rem' }}>Light Sidebar</h4>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    height: '500px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <SidebarVariant variant="light" />
                                </div>
                            </div>

                            <div>
                                <h4 style={{ color: '#667eea', textAlign: 'center', marginBottom: '1rem', fontSize: '1.2rem' }}>Minimal</h4>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    height: '500px',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <SidebarVariant variant="minimal" />
                                </div>
                            </div>
                        </div>

                        <CodeDisplay
                            title="Dark Sidebar Usage"
                            code={`<SidebarVariant 
  variant="dark"
  logo="ADMIN"
  menuItems={[
    { icon: <FaHome />, label: "Dashboard", active: true },
    { icon: <FaBox />, label: "Products", badge: "12" },
    { icon: <FaChartBar />, label: "Analytics" }
  ]}
  user={{
    name: "John Doe",
    role: "Admin",
    avatar: "https://i.pravatar.cc/150?img=1"
  }}
/>`}
                        />

                        <CodeDisplay
                            title="Light Sidebar Usage"
                            code={`<SidebarVariant 
  variant="light"
  logo="DASHBOARD"
  menuItems={[
    { icon: <FaHome />, label: "Dashboard", active: true },
    { icon: <FaBox />, label: "Products" }
  ]}
/>`}
                        />

                        <CodeDisplay
                            title="Minimal Sidebar Usage"
                            code={`<SidebarVariant 
  variant="minimal"
  logo="B"
  menuItems={[
    { icon: <FaHome />, label: "Dashboard", active: true },
    { icon: <FaCog />, label: "Settings" }
  ]}
/>`}
                        />
                    </>
                );

            default:
                return <div>Select a component</div>;
        }
    };

    return (
        <Layout>
            <Sidebar activeItem={activeComponent} onSelect={setActiveComponent} />
            <MainContent>
                <Header />
                <ContentWrapper>
                    {renderComponent()}
                </ContentWrapper>
            </MainContent>
        </Layout>
    );
}

export default function DashboardPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DashboardContent />
        </Suspense>
    );
}
