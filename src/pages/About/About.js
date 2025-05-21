import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutContainer = styled.div``;

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
  background: linear-gradient(45deg, #fff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: #333;
  text-align: center;
  position: relative;
  font-weight: 700;

  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, #007bff, #00bfff);
    border-radius: 2px;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.3s ease;
  aspect-ratio: 16/9;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

    img {
      transform: scale(1.05);
    }

    .overlay {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    transition: background 0.3s ease;
  }

  .title {
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const StatsSection = styled(Section)`
  background: linear-gradient(45deg, #007bff, #00bfff);
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const CtaSection = styled(Section)`
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: black;
`;

const CtaContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  transform: translateY(50px);
  opacity: 0;
`;

const CtaTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const CtaDescription = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.8;
`;

const CtaButton = styled.button`
  background: linear-gradient(45deg, #007bff, #00bfff);
  color: white;
  border: none;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
  }
`;

function About() {
  const section01Ref = useRef(null);
  const section01ContentRef = useRef(null);
  const imageRefs = useRef([]);
  const statRefs = useRef([]);
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

    // 이미지 카드 애니메이션
    imageRefs.current.forEach((image, index) => {
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "top center",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
      });
    });

    // 통계 카드 애니메이션
    statRefs.current.forEach((stat, index) => {
      gsap.to(stat, {
        scrollTrigger: {
          trigger: stat,
          start: "top bottom",
          end: "top center",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        delay: index * 0.1,
        ease: "power2.out",
      });
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

  const images = [
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "office1",
      description: "description1",
    },
    {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "office2",
      description: "description2",
    },
  ];

  const stats = [
    { number: "10+", label: "stat1" },
    { number: "500+", label: "stat2" },
    { number: "1000+", label: "stat3" },
    { number: "98%", label: "stat4" },
  ];

  return (
    <AboutContainer>
      <Section01 ref={section01Ref}>
        <Section01Content ref={section01ContentRef}>
          <Section01Title>
            Title
            <br />
          </Section01Title>
          <Section01Subtitle>
            Description
            <br />
          </Section01Subtitle>
        </Section01Content>
        <ScrollIndicator>ScrollIndicator</ScrollIndicator>
      </Section01>

      <Section>
        <SectionContent>
          <SectionTitle>Title</SectionTitle>
          <ImageGrid>
            {images.map((image, index) => (
              <ImageCard
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
              >
                <img src={image.src} alt={image.title} />
                <div className="overlay">
                  <div className="title">{image.title}</div>
                  <div className="description">{image.description}</div>
                </div>
              </ImageCard>
            ))}
          </ImageGrid>
        </SectionContent>
      </Section>

      <StatsSection>
        <SectionContent>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                ref={(el) => (statRefs.current[index] = el)}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </SectionContent>
      </StatsSection>

      <CtaSection>
        <SectionContent>
          <CtaContent ref={ctaRef}>
            <CtaTitle>Title</CtaTitle>
            <CtaDescription>
              Description
              <br />
            </CtaDescription>
            <CtaButton>Button</CtaButton>
          </CtaContent>
        </SectionContent>
      </CtaSection>
    </AboutContainer>
  );
}

export default About;
