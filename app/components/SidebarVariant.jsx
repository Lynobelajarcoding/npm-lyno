"use client";
import styled from "styled-components";
import { FaHome, FaBox, FaChartBar, FaCog, FaUser, FaSignOutAlt } from "react-icons/fa";

// Variant 1: Dark Sidebar
const DarkSidebar = styled.aside`
  width: 260px;
  height: 100vh;
  background: linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
`;

const SidebarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  padding: 0 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SidebarMenu = styled.nav`
  flex: 1;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  background: ${props => props.$active ? 'rgba(102, 126, 234, 0.2)' : 'transparent'};
  color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  font-weight: ${props => props.$active ? '600' : '500'};
  
  &:hover {
    background: rgba(102, 126, 234, 0.15);
    color: #fff;
    transform: translateX(5px);
  }
  
  svg {
    font-size: 1.2rem;
  }
  
  .badge {
    margin-left: auto;
    background: #ff6b6b;
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 10px;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

const UserSection = styled.div`
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  .info {
    flex: 1;
    
    .name {
      font-weight: 600;
      font-size: 0.9rem;
    }
    
    .role {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  
  svg {
    cursor: pointer;
    &:hover {
      color: #ff6b6b;
    }
  }
`;

// Variant 2: Light Sidebar
const LightSidebar = styled(DarkSidebar)`
  background: #f8f9fa;
  color: #333;
  border-right: 1px solid #e0e0e0;
`;

const LightMenuItem = styled(MenuItem)`
  background: ${props => props.$active ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'transparent'};
  color: ${props => props.$active ? '#fff' : '#333'};
  
  &:hover {
    background: ${props => props.$active ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'rgba(102, 126, 234, 0.1)'};
  }
`;

// Variant 3: Minimal Sidebar
const MinimalSidebar = styled.aside`
  width: 80px;
  height: 100vh;
  background: linear-gradient(180deg, #667eea, #764ba2);
  color: white;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
`;

const MinimalItem = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.3)' : 'transparent'};
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  svg {
    font-size: 1.5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: ${props => props.$active ? '60%' : '0'};
    background: white;
    border-radius: 0 4px 4px 0;
    transition: height 0.3s;
  }
`;

export default function SidebarVariant({
  variant = "dark",
  logo = "BRAND",
  menuItems = [
    { icon: <FaHome />, label: "Dashboard", active: true },
    { icon: <FaBox />, label: "Products", badge: "12" },
    { icon: <FaChartBar />, label: "Analytics" },
    { icon: <FaCog />, label: "Settings" }
  ],
  user = {
    name: "John Doe",
    role: "Admin",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  onItemClick,
  ...props
}) {
  if (variant === "dark") {
    return (
      <DarkSidebar {...props}>
        <SidebarLogo>{logo}</SidebarLogo>
        <SidebarMenu>
          {menuItems.map((item, idx) => (
            <MenuItem
              key={idx}
              $active={item.active}
              onClick={() => onItemClick?.(item.label, idx)}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.badge && <span className="badge">{item.badge}</span>}
            </MenuItem>
          ))}
        </SidebarMenu>
        <UserSection>
          <img src={user.avatar} alt={user.name} />
          <div className="info">
            <div className="name">{user.name}</div>
            <div className="role">{user.role}</div>
          </div>
          <FaSignOutAlt />
        </UserSection>
      </DarkSidebar>
    );
  }

  if (variant === "light") {
    return (
      <LightSidebar {...props}>
        <SidebarLogo style={{ color: '#1a1a1a' }}>{logo}</SidebarLogo>
        <SidebarMenu>
          {menuItems.map((item, idx) => (
            <LightMenuItem
              key={idx}
              $active={item.active}
              onClick={() => onItemClick?.(item.label, idx)}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.badge && <span className="badge">{item.badge}</span>}
            </LightMenuItem>
          ))}
        </SidebarMenu>
        <UserSection style={{ color: '#333' }}>
          <img src={user.avatar} alt={user.name} />
          <div className="info">
            <div className="name">{user.name}</div>
            <div className="role">{user.role}</div>
          </div>
          <FaSignOutAlt />
        </UserSection>
      </LightSidebar>
    );
  }

  if (variant === "minimal") {
    return (
      <MinimalSidebar {...props}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '2rem' }}>
          {logo.charAt(0)}
        </div>
        {menuItems.map((item, idx) => (
          <MinimalItem
            key={idx}
            $active={item.active}
            onClick={() => onItemClick?.(item.label, idx)}
          >
            {item.icon}
          </MinimalItem>
        ))}
      </MinimalSidebar>
    );
  }

  return null;
}
