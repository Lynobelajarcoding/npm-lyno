"use client";
import styled from "styled-components";

// Variant 1: Product Card
const ProductCard = styled.div`
  width: 320px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductContent = styled.div`
  padding: 1.5rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProductPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #667eea;
  margin-bottom: 1rem;
`;

const ProductButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
`;

// Variant 2: Profile Card
const ProfileCard = styled.div`
  width: 280px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const ProfileName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const ProfileRole = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
`;

const ProfileStats = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

const Stat = styled.div`
  .number {
    font-size: 1.5rem;
    font-weight: 800;
    display: block;
  }
  
  .label {
    font-size: 0.85rem;
    opacity: 0.8;
    margin-top: 0.25rem;
  }
`;

// Variant 3: Blog Card
const BlogCard = styled.div`
  width: 380px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const BlogImage = styled.img`
  width: 140px;
  height: 100%;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const BlogCategory = styled.span`
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const BlogExcerpt = styled.p`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.8rem;
`;

const BlogMeta = styled.div`
  font-size: 0.8rem;
  color: #999;
`;

export default function CardVariant({
  variant = "product",
  // Product props
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  title = "Premium Headphones",
  description = "High-quality wireless headphones with noise cancellation",
  price = "$299",
  buttonText = "Add to Cart",
  onButtonClick,
  // Profile props
  avatar = "https://i.pravatar.cc/150?img=1",
  name = "John Doe",
  role = "Senior Developer",
  followers = "2.5K",
  projects = "48",
  posts = "120",
  // Blog props
  category = "Technology",
  excerpt = "Discover the latest trends in web development and modern design patterns...",
  author = "Sarah Johnson",
  date = "Jan 15, 2025",
  readTime = "5 min read",
  ...props
}) {
  if (variant === "product") {
    return (
      <ProductCard {...props}>
        <ProductImage src={image} alt={title} />
        <ProductContent>
          <ProductTitle>{title}</ProductTitle>
          <ProductDescription>{description}</ProductDescription>
          <ProductPrice>{price}</ProductPrice>
          <ProductButton onClick={onButtonClick}>
            {buttonText}
          </ProductButton>
        </ProductContent>
      </ProductCard>
    );
  }

  if (variant === "profile") {
    return (
      <ProfileCard {...props}>
        <ProfileAvatar src={avatar} alt={name} />
        <ProfileName>{name}</ProfileName>
        <ProfileRole>{role}</ProfileRole>
        <ProfileStats>
          <Stat>
            <span className="number">{followers}</span>
            <span className="label">Followers</span>
          </Stat>
          <Stat>
            <span className="number">{projects}</span>
            <span className="label">Projects</span>
          </Stat>
          <Stat>
            <span className="number">{posts}</span>
            <span className="label">Posts</span>
          </Stat>
        </ProfileStats>
      </ProfileCard>
    );
  }

  if (variant === "blog") {
    return (
      <BlogCard {...props}>
        <BlogImage src={image} alt={title} />
        <BlogContent>
          <BlogCategory>{category}</BlogCategory>
          <BlogTitle>{title}</BlogTitle>
          <BlogExcerpt>{excerpt}</BlogExcerpt>
          <BlogMeta>
            By {author} • {date} • {readTime}
          </BlogMeta>
        </BlogContent>
      </BlogCard>
    );
  }

  return null;
}
