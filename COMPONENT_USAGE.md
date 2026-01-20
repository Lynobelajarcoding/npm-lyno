# Design System Components - Usage Guide

## 📦 Installation

```bash
npm install styled-dannzz-ui
# or
yarn add styled-dannzz-ui
```

## 🎨 Components

### 1. ButtonVariant

5 unique button styles with full customization.

#### Variants
- `ghost` - Outline with fill animation
- `neon` - Cyberpunk glowing effect  
- `gradient` - Animated gradient background
- `3d` - 3D depth with shadow
- `magnetic` - Magnetic hover effect

#### Props
```typescript
{
  variant?: "ghost" | "neon" | "gradient" | "3d" | "magnetic";
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  color?: string;
  colorStart?: string; // untuk gradient
  colorEnd?: string;   // untuk gradient
}
```

#### Usage Example
```jsx
import { ButtonVariant } from 'styled-dannzz-ui';

// Basic usage
<ButtonVariant variant="ghost" label="Click Me" />

// With custom colors
<ButtonVariant 
  variant="neon" 
  label="Neon Button"
  color="#00ff88"
/>

// Large size with icon
<ButtonVariant 
  variant="3d"
  label="Get Started"
  size="lg"
  onClick={() => console.log('Clicked!')}
  icon={<ArrowIcon />}
/>

// Gradient with custom colors
<ButtonVariant 
  variant="gradient"
  label="Premium"
  colorStart="#ff6b6b"
  colorEnd="#ee5a6f"
/>
```

---

### 2. CardVariant

5 unique card layouts with different interaction patterns.

#### Variants
- `flip` - 3D flip card (front/back)
- `parallax` - Multi-layer parallax effect
- `magazine` - Asymmetric magazine layout
- `minimal` - Clean minimal design with expand
- `stack` - Stacked cards effect

#### Props
```typescript
{
  variant?: "flip" | "parallax" | "magazine" | "minimal" | "stack";
  title?: string;
  description?: string;
  image?: string;
  price?: string;
  rating?: string;
  badge?: string;
  badgeColor?: string;
  tags?: string[];
  backContent?: string; // untuk flip variant
  onCardClick?: () => void;
}
```

#### Usage Example
```jsx
import { CardVariant } from 'styled-dannzz-ui';

// Flip card
<CardVariant 
  variant="flip"
  title="Premium Suite"
  description="Luxury room with ocean view"
  image="/path/to/image.jpg"
  price="$299/night"
  rating="⭐ 4.9"
  backContent="Book now and get 20% off!"
  tags={["Luxury", "Ocean View", "King Bed"]}
/>

// Magazine layout
<CardVariant 
  variant="magazine"
  title="Modern Design"
  description="Beautiful asymmetric layout"
  badge="FEATURED"
  badgeColor="#667eea"
/>

// Minimal with custom data
<CardVariant 
  variant="minimal"
  title="Deluxe Room"
  description="Comfortable and spacious"
  price="$149/night"
  onCardClick={() => router.push('/room/123')}
/>
```

---

### 3. FooterVariant

5 different footer layouts for various use cases.

#### Variants
- `minimal` - Single line footer
- `columns` - Multi-column grid
- `wave` - Wave SVG divider with newsletter
- `cta` - Large call-to-action footer
- `social-first` - Social media focused

#### Props
```typescript
{
  variant?: "minimal" | "columns" | "wave" | "cta" | "social-first";
  companyName?: string;
  description?: string;
  links?: {
    company?: Array<{label: string, href: string}>;
    product?: Array<{label: string, href: string}>;
    legal?: Array<{label: string, href: string}>;
  };
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
  newsletter?: {
    title?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
    onSubmit?: (e) => void;
  };
  copyright?: string;
  cta?: {
    title?: string;
    description?: string;
    buttonText?: string;
    onClick?: () => void;
  };
  bgColor?: string;
  textColor?: string;
}
```

#### Usage Example
```jsx
import { FooterVariant } from 'styled-dannzz-ui';

// Columns footer
<FooterVariant 
  variant="columns"
  companyName="My Company"
  description="We build amazing products"
  links={{
    company: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" }
    ],
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" }
    ]
  }}
  socialLinks={{
    twitter: "https://twitter.com/mycompany",
    github: "https://github.com/mycompany"
  }}
/>

// CTA footer
<FooterVariant 
  variant="cta"
  cta={{
    title: "Ready to Start?",
    description: "Join us today!",
    buttonText: "Get Started",
    onClick: () => router.push('/signup')
  }}
/>

// Wave footer with newsletter
<FooterVariant 
  variant="wave"
  newsletter={{
    title: "Subscribe",
    description: "Get weekly updates",
    placeholder: "your@email.com",
    buttonText: "Subscribe",
    onSubmit: (e) => handleSubscribe(e)
  }}
  bgColor="linear-gradient(135deg, #ff6b6b, #ee5a6f)"
/>
```

---

### 4. HeaderVariant

5 different header/navigation styles.

#### Variants
- `centered` - Center logo, split navigation
- `sidebar-trigger` - Mobile hamburger menu
- `mega-menu` - Dropdown mega menu
- `transparent` - Transparent with scroll change
- `split` - Logo top, navigation bottom

#### Props
```typescript
{
  variant?: "centered" | "sidebar-trigger" | "mega-menu" | "transparent" | "split";
  logo?: ReactNode;
  logoText?: string;
  logoColor?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    submenu?: Array<{label: string, href: string}>;
  }>;
  actionButtons?: Array<{
    label: string;
    onClick: () => void;
    variant?: "outline" | "filled";
    color?: string;
  }>;
  searchPlaceholder?: string;
  showSearch?: boolean;
  sticky?: boolean;
  transparent?: boolean;
  bgColor?: string;
  accentColor?: string;
}
```

#### Usage Example
```jsx
import { HeaderVariant } from 'styled-dannzz-ui';

// Mega menu header
<HeaderVariant 
  variant="mega-menu"
  logoText="BRAND"
  menuItems={[
    { label: "Home", href: "/" },
    { 
      label: "Products", 
      href: "/products",
      submenu: [
        { label: "Category 1", href: "/cat1" },
        { label: "Category 2", href: "/cat2" }
      ]
    },
    { label: "About", href: "/about" }
  ]}
  actionButtons={[
    { label: "Login", onClick: handleLogin, variant: "outline" },
    { label: "Sign Up", onClick: handleSignup }
  ]}
  showSearch={true}
  sticky={true}
/>

// Transparent header
<HeaderVariant 
  variant="transparent"
  logoText="LOGO"
  transparent={true}
  menuItems={navigationItems}
/>
```

---

### 5. SidebarVariant

5 different sidebar navigation patterns.

#### Variants
- `collapsible` - Expand/collapse sidebar
- `floating` - Floating with blur background
- `tabs` - Tab-based navigation
- `tree` - Hierarchical tree menu
- `compact` - Ultra-compact icon bar

#### Props
```typescript
{
  variant?: "collapsible" | "floating" | "tabs" | "tree" | "compact";
  logo?: ReactNode;
  logoText?: string;
  menuItems?: Array<{
    name: string;
    icon: ReactNode;
    href?: string;
    badge?: string;
    children?: Array<{name: string, href: string}>;
  }>;
  userProfile?: {
    name: string;
    avatar: string;
    role: string;
    status?: string;
  };
  onItemClick?: (name: string, index: number) => void;
  defaultCollapsed?: boolean;
  position?: "left" | "right";
  bgColor?: string;
  textColor?: string;
  activeItem?: number;
}
```

#### Usage Example
```jsx
import { SidebarVariant } from 'styled-dannzz-ui';

// Collapsible sidebar
<SidebarVariant 
  variant="collapsible"
  logoText="ADMIN"
  menuItems={[
    { name: "Dashboard", icon: <DashboardIcon />, href: "/" },
    { name: "Products", icon: <ProductIcon />, badge: "12" },
    { name: "Orders", icon: <OrderIcon />, badge: "3" }
  ]}
  userProfile={{
    name: "John Doe",
    avatar: "JD",
    role: "Admin"
  }}
  onItemClick={(name, idx) => handleNavigation(name)}
  defaultCollapsed={false}
/>

// Tree sidebar dengan hierarchi
<SidebarVariant 
  variant="tree"
  menuItems={[
    { 
      name: "Dashboard", 
      icon: "📊",
      children: [
        { name: "Overview", href: "/overview" },
        { name: "Analytics", href: "/analytics" }
      ]
    },
    { name: "Settings", icon: "⚙️" }
  ]}
/>

// Compact sidebar
<SidebarVariant 
  variant="compact"
  menuItems={compactMenuItems}
  bgColor="linear-gradient(180deg, #667eea, #764ba2)"
/>
```

---

## 🎯 Best Practices

### 1. Consistency
Use the same variant across similar components for consistency:
```jsx
// Good
<HeaderVariant variant="transparent" />
<ButtonVariant variant="gradient" />
<FooterVariant variant="minimal" />
```

### 2. Customization
Always provide custom text for production:
```jsx
// Good - Fully customized
<ButtonVariant 
  variant="ghost"
  label="Buy Now"
  onClick={handlePurchase}
/>

// Avoid - Using defaults
<ButtonVariant variant="ghost" />
```

### 3. Responsive
Test all variants on mobile:
```jsx
<CardVariant 
  variant={isMobile ? "minimal" : "magazine"}
  {...cardProps}
/>
```

### 4. Accessibility
Always provide onClick handlers and proper labels:
```jsx
<ButtonVariant 
  label="Submit Form"
  onClick={handleSubmit}
  aria-label="Submit registration form"
/>
```

---

## 🎨 Theming

All components support custom colors:

```jsx
// Custom theme colors
const theme = {
  primary: "#667eea",
  secondary: "#764ba2",
  accent: "#ff6b6b"
};

<ButtonVariant 
  variant="gradient"
  colorStart={theme.primary}
  colorEnd={theme.secondary}
/>

<FooterVariant 
  variant="columns"
  bgColor={theme.primary}
  textColor="#fff"
/>
```

---

## 📱 Responsive Design

Components are responsive by default:

```jsx
// Adapts automatically
<HeaderVariant variant="sidebar-trigger" />

// Manual control
<SidebarVariant 
  variant={windowWidth < 768 ? "compact" : "collapsible"}
/>
```

---

## 🚀 Performance Tips

1. **Lazy load** heavy variants:
```jsx
const CardVariant = lazy(() => import('styled-dannzz-ui/CardVariant'));
```

2. **Memoize** callbacks:
```jsx
const handleClick = useCallback(() => {}, []);
<ButtonVariant onClick={handleClick} />
```

3. **Optimize** images:
```jsx
<CardVariant 
  image="/optimized-image.webp"
  // Better than large PNG/JPG
/>
```

---

## 📝 TypeScript Support

All components include TypeScript definitions:

```typescript
import { ButtonVariant, CardVariant } from 'styled-dannzz-ui';
import type { ButtonVariantProps, CardVariantProps } from 'styled-dannzz-ui';

const MyButton: React.FC<ButtonVariantProps> = (props) => {
  return <ButtonVariant {...props} />;
};
```

---

## 🐛 Troubleshooting

### Styles not applying
Make sure styled-components is installed:
```bash
npm install styled-components
```

### Icons not showing
Install react-icons:
```bash
npm install react-icons
```

### Animations laggy
Reduce number of simultaneous animations or use `will-change` CSS property.

---

## 📄 License

MIT © DANNZZ

## 🤝 Contributing

Contributions welcome! Please read our contributing guide.

## 📧 Support

For issues and questions: support@dannzz.com
