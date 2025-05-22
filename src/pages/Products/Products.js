import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductsContainer = styled.div``;

const Section01 = styled.section`
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  left: 0;
  right: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      transparent 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    pointer-events: none;
  }
`;

const Section01Content = styled.div`
  text-align: center;
  max-width: 1200px;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
`;

const Section01Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2rem;
  color: white;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 3.2rem;
  }
`;

const Section01Subtitle = styled.p`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  z-index: 2;

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(45deg);
    animation: scrollDown 2s infinite;
  }

  @keyframes scrollDown {
    0% {
      transform: rotate(45deg) translate(-5px, -5px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(45deg) translate(5px, 5px);
      opacity: 0;
    }
  }
`;

const Section = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  left: 0;
  right: 0;

  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const SectionContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

const CtaSection = styled(Section)`
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
`;

const CtaContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  transform: translateY(50px);
  opacity: 0;
`;

// const CtaTitle = styled.h2`
//   font-size: 3rem;
//   margin-bottom: 1.5rem;
//   font-weight: 700;
// `;

const CtaDescription = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.8;
`;

// const CtaButton = styled.button`
//   background: linear-gradient(45deg, #007bff, #00bfff);
//   color: white;
//   border: none;
//   padding: 1rem 3rem;
//   font-size: 1.2rem;
//   border-radius: 30px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
//   }
// `;

const ProductSection = styled(Section)`
  background: white;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  transform: translateY(50px);
  opacity: 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProductImage = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  .main-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover .main-image {
    transform: scale(1.05);
  }

  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
  }
`;

const ProductInfo = styled.div`
  .title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #333;
  }

  .description {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 2rem;
  }
`;

const FeatureList = styled.div`
  margin-bottom: 2rem;

  .feature-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 10px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(10px);
      background: #f0f2f5;
    }

    .feature-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(45deg, #007bff, #00bfff);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .feature-content {
      flex: 1;

      h4 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #333;
      }

      p {
        font-size: 1rem;
        color: #666;
        line-height: 1.6;
      }
    }
  }
`;

// const TechSpecs = styled.div`
//   margin-bottom: 2rem;

//   h3 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     margin-bottom: 1rem;
//     color: #333;
//   }

//   .specs-grid {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     gap: 1rem;

//     .spec-item {
//       padding: 1rem;
//       background: #f8f9fa;
//       border-radius: 8px;

//       .spec-label {
//         font-size: 0.9rem;
//         color: #666;
//         margin-bottom: 0.3rem;
//       }

//       .spec-value {
//         font-size: 1.1rem;
//         font-weight: 500;
//         color: #333;
//       }
//     }
//   }
// `;

// const ActionButtons = styled.div`
//   display: flex;
//   gap: 1rem;

//   .primary-button {
//     background: linear-gradient(45deg, #007bff, #00bfff);
//     color: white;
//     border: none;
//     padding: 1rem 2rem;
//     font-size: 1.1rem;
//     border-radius: 30px;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

//     &:hover {
//       transform: translateY(-2px);
//       box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
//     }
//   }

//   .secondary-button {
//     background: white;
//     color: #007bff;
//     border: 2px solid #007bff;
//     padding: 1rem 2rem;
//     font-size: 1.1rem;
//     border-radius: 30px;
//     cursor: pointer;
//     transition: all 0.3s ease;

//     &:hover {
//       background: #f8f9fa;
//       transform: translateY(-2px);
//     }
//   }
// `;

function Products() {
  const section01Ref = useRef(null);
  const section01ContentRef = useRef(null);
  const productRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Section01 애니메이션
    gsap.to(section01ContentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    // 배경 패럴랙스 효과
    gsap.to(section01Ref.current, {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: section01Ref.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // 제품 섹션 애니메이션
    gsap.to(productRef.current, {
      scrollTrigger: {
        trigger: productRef.current,
        start: "top bottom",
        end: "top center",
        scrub: 0.5,
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    // CTA 섹션 애니메이션
    gsap.to(ctaRef.current, {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top bottom",
        end: "top center",
        scrub: 0.5,
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const product = {
    title: "소프트웨어 및 하드웨어 솔루션",
    description: "제품설명",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    features: [
      {
        icon: "🤖",
        title: "전자계약시스템",
        description:
          "계약서 서명의 불편함과 계약서 보관의 불편함을 해결해드립니다.",
      },
      {
        icon: "📊",
        title: "성인출입시스템",
        description:
          "무인 시설 출입 시 성인인증에 대한 번거로움을 위한 소프트웨어 및 하드웨어를 제공해드립니다.",
      },
      // {
      //   icon: "⚡",
      //   title: "title",
      //   description: "description",
      // },
      // {
      //   icon: "🔒",
      //   title: "title",
      //   description: "description",
      // },
    ],
    specs: [
      { label: "label", value: "value" },
      { label: "label", value: "value" },
      { label: "label", value: "value" },
      { label: "label", value: "value" },
      { label: "label", value: "value" },
    ],
  };

  return (
    <ProductsContainer>
      <Section01 ref={section01Ref}>
        <Section01Content ref={section01ContentRef}>
          <Section01Title>No Paper</Section01Title>
          <Section01Subtitle>Solutions</Section01Subtitle>
        </Section01Content>
        <ScrollIndicator>scroll</ScrollIndicator>
      </Section01>

      <ProductSection>
        <SectionContent>
          <ProductContainer ref={productRef}>
            <ProductImage>
              <img
                src={product.image}
                alt={product.title}
                className="main-image"
              />
              <div className="image-overlay">
                <h3>{product.title}</h3>
              </div>
            </ProductImage>
            <ProductInfo>
              <h2 className="title">{product.title}</h2>
              <p className="description">{product.description}</p>

              <FeatureList>
                {product.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </FeatureList>

              {/* <TechSpecs>
                <h3>기술 사양</h3>
                <div className="specs-grid">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="spec-item">
                      <div className="spec-label">{spec.label}</div>
                      <div className="spec-value">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </TechSpecs> */}

              {/* <ActionButtons>
                <button className="primary-button">button</button>
                <button className="secondary-button">button</button>
              </ActionButtons> */}
            </ProductInfo>
          </ProductContainer>
        </SectionContent>
      </ProductSection>

      <CtaSection>
        <SectionContent>
          <CtaContent ref={ctaRef}>
            {/* <CtaTitle>title</CtaTitle> */}
            <CtaDescription>
              고객의 Digitalization 실현을 위해 <br /> 필요한 솔루션과 서비스를
              제공하기 위해 최선을 다하겠습니다.
            </CtaDescription>
            {/* <CtaButton>button</CtaButton> */}
          </CtaContent>
        </SectionContent>
      </CtaSection>
    </ProductsContainer>
  );
}

export default Products;
