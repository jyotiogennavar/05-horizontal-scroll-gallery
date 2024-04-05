import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useTransform, useScroll } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Cards from "./Cards";

const HorizontalScroll = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <h1>ISRO’s First Launch Pad to Mangalyaan:</h1>
          <p> 10 Historic Photos From Our Space Adventure</p>
        </HeroContent>
        <StarsBackground>
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </StarsBackground>
      </HeroSection>
      <HorizontalScrollCarousel />
      <Footer>
        <p>Thank You</p>
        <p>Source - https://www.thebetterindia.com/204852/india-isro-historic-pictures-thumba-mangalyaan-vikram-sarabhai-kalam-pslv/</p>
      </Footer>
    </>
  );
};
// Styled components
const HeroSection = styled.section`
  position: relative;
  height: 70vh;
  background-color: #0e0e10; /* Neutral 800 */
  font-family: "Roboto Slab", serif;
`;

const StarsBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10%;
  color: #cbcbcb;

  h1 {
    font-size: clamp(
    2rem,
    5vw + 1rem,
    4rem
  );
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    margin-top: 1.5rem;
    font-size: 2rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 8%;
  
    p {
      font-size: 1.5rem;
    }
  }
`;

const Footer = styled.div`
  height: 48vh;
  display: grid;
  place-content: center;
  background-color: #0e0e10; /* Neutral 800 */


  p {
    padding: 1rem;
    margin-top: 1rem;
    font-size: 1rem;
    color: #a0aec0; /* Neutral 400 */
  
  }
`;

// Horizontal Scroll Carousel component
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <CarouselContainer ref={targetRef}>
      <StickyContainer>
        <ScrollSec style={{ x }}>
          <Cards />
        </ScrollSec>
      </StickyContainer>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.section`
  position: relative;
  height: 300vh;
  background-color: #0e0e10; /* Neutral 900 */
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 100vh;
  align-items: center;
  overflow: hidden;
`;

const ScrollSec = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

export default HorizontalScroll;
