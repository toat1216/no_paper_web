import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeContainer = styled.div``;

const Section01 = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80");
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
  font-size: 4rem;
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

// const SectionTitle = styled.h2`
//   font-size: 2.8rem;
//   margin-bottom: 3rem;
//   color: #333;
//   text-align: center;
//   position: relative;
//   font-weight: 700;

//   &:after {
//     content: "";
//     position: absolute;
//     bottom: -15px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 120px;
//     height: 4px;
//     background: linear-gradient(90deg, #007bff, #00bfff);
//     border-radius: 2px;
//   }
// `;

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

// const ValuesSection = styled(Section)`
//   background: #f8f9fa;
// `;

// const ValuesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 3rem;
//   margin-bottom: 4rem;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ValueCard = styled.div`
//   background: white;
//   border-radius: 20px;
//   overflow: hidden;
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
//   transform: translateY(50px);
//   opacity: 0;
//   transition: all 0.3s ease;
//   border: 1px solid rgba(0, 0, 0, 0.05);

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

//     .image {
//       transform: scale(1.05);
//     }
//   }

//   .image {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     transition: transform 0.3s ease;
//   }

//   .content {
//     padding: 2.5rem;
//     text-align: center;
//   }

//   .title {
//     font-size: 2rem;
//     font-weight: 700;
//     margin-bottom: 1rem;
//     color: #333;
//   }

//   .description {
//     color: #666;
//     font-size: 1.1rem;
//     line-height: 1.8;
//   }
// `;

// const NewsSection = styled(Section)`
//   background: white;
// `;

// const NewsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 2rem;
//   margin-bottom: 4rem;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const NewsCard = styled.div`
//   background: white;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
//   transform: translateY(30px);
//   opacity: 0;
//   transition: all 0.3s ease;
//   border: 1px solid rgba(0, 0, 0, 0.05);

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

//     .image {
//       transform: scale(1.05);
//     }
//   }

//   .image {
//     width: 100%;
//     height: 200px;
//     object-fit: cover;
//     transition: transform 0.3s ease;
//   }

//   .content {
//     padding: 1.5rem;
//   }

//   .date {
//     font-size: 0.9rem;
//     color: #666;
//     margin-bottom: 0.5rem;
//   }

//   .title {
//     font-size: 1.3rem;
//     font-weight: 600;
//     margin-bottom: 1rem;
//     color: #333;
//     line-height: 1.4;
//   }

//   .description {
//     color: #666;
//     font-size: 1rem;
//     line-height: 1.6;
//     margin-bottom: 1.5rem;
//   }

//   .readMore {
//     color: #007bff;
//     text-decoration: none;
//     font-weight: 500;
//     display: inline-flex;
//     align-items: center;
//     gap: 0.5rem;

//     &:hover {
//       color: #0056b3;
//     }

//     &::after {
//       content: "→";
//       transition: transform 0.3s ease;
//     }

//     &:hover::after {
//       transform: translateX(5px);
//     }
//   }
// `;

function Home() {
  const section01Ref = useRef(null);
  const section01ContentRef = useRef(null);
  const valueRefs = useRef([]);
  const newsRefs = useRef([]);
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

    // 가치관 카드 애니메이션
    valueRefs.current.forEach((value, index) => {
      gsap.to(value, {
        scrollTrigger: {
          trigger: value,
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

    // 뉴스 카드 애니메이션
    newsRefs.current.forEach((news, index) => {
      gsap.to(news, {
        scrollTrigger: {
          trigger: news,
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

  // const values = [
  //   {
  //     title: "value1",
  //     description: "description1",
  //     image:
  //       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  //   },
  //   {
  //     title: "value2",
  //     description: "description2",
  //     image:
  //       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  //   },
  //   {
  //     title: "value3",
  //     description: "description3",
  //     image:
  //       "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  //   },
  // ];

  // const news = [
  //   {
  //     date: "2024.03.15",
  //     title: "news1",
  //     description: "description1",
  //     image:
  //       "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   },
  //   {
  //     date: "2024.03.10",
  //     title: "news2",
  //     description: "description2",
  //     image:
  //       "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  //   },
  //   {
  //     date: "2024.03.05",
  //     title: "news3",
  //     description: "description3",
  //     image:
  //       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
  //   },
  // ];

  return (
    <HomeContainer>
      <Section01 ref={section01Ref}>
        <Section01Content ref={section01ContentRef}>
          <Section01Title>
            모든 실물을 <br />
            디지털로 제공하기 위한 플랫폼
          </Section01Title>
          <Section01Subtitle>
            노페이퍼는 소프트웨어 및 하드웨어를 통해 모든 것을 디지털화하기 위한
            플랫폼을 제공합니다.
          </Section01Subtitle>
        </Section01Content>
        <ScrollIndicator>scroll</ScrollIndicator>
      </Section01>

      {/* <ValuesSection>
        <SectionContent>
          <SectionTitle>value</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                ref={(el) => (valueRefs.current[index] = el)}
              >
                <img src={value.image} alt={value.title} className="image" />
                <div className="content">
                  <h3 className="title">{value.title}</h3>
                  <p className="description">{value.description}</p>
                </div>
              </ValueCard>
            ))}
          </ValuesGrid>
        </SectionContent>
      </ValuesSection>

      <NewsSection>
        <SectionContent>
          <SectionTitle>최신 소식</SectionTitle>
          <NewsGrid>
            {news.map((item, index) => (
              <NewsCard
                key={index}
                ref={(el) => (newsRefs.current[index] = el)}
              >
                <img src={item.image} alt={item.title} className="image" />
                <div className="content">
                  <div className="date">{item.date}</div>
                  <h3 className="title">{item.title}</h3>
                  <p className="description">{item.description}</p>
                  <button className="readMore" onClick={() => {}}>
                    자세히 보기
                  </button>
                </div>
              </NewsCard>
            ))}
          </NewsGrid>
        </SectionContent>
      </NewsSection> */}

      <CtaSection>
        <SectionContent>
          <CtaContent ref={ctaRef}>
            <CtaTitle>No Paper</CtaTitle>
            <CtaDescription>
              최고의 기술과 서비스로 여러분의 비즈니스를 한 단계 더 발전시켜
              드립니다.
              <br />
              지금 바로 문의하시고 새로운 가능성을 발견해보세요.
            </CtaDescription>
            <CtaButton>문의하기</CtaButton>
          </CtaContent>
        </SectionContent>
      </CtaSection>
    </HomeContainer>
  );
}

export default Home;
