import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import ImageOffer from "../images/1_offer.jpg";
import ImageOffer2 from "../images/2_offer.jpg";
import { IoMdArrowRoundForward } from "react-icons/io";
import AOS from 'aos';
import "aos/dist/aos.css";



const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`;

const Section = styled.section`
width: 100%;
height:100%;
padding: 4rem 0rem;
margin-bottom:8rem;

@media screen and (max-width:768px) {
  padding:0;
}
`
const Container = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;
margin-left:4rem;

@media screen and (max-width:768px) {
  grid-template-columns: 1fr;
}
`

const Column = styled.div`

display: column;
justify-content: center;
align-items: center;
margin-left:-2rem;

h2 {
  margin-bottom: 0.5rem;
  font-size: clamp(0.7rem, 3vw, 1.1rem);
}

img {
  width:90%;
  height: 90%;
  object-fit:cover;


  @media screen and (max-width: 768px) {
    width:85%;
    height: 85%;
  }
}
` 

export const OffersSection = ({}) => {

AOS.init({
  duration:500
});

  return (
    <Section>
      <Container>
        <Column data-aos="fade-right"
                data-aos-offset="500"
                style={{marginBottom: "2rem",
                        marginTop: "5rem"}}>
        <img src={ImageOffer} alt="home" />
        <h2>5 Bed 3 Bath House in Venice, California</h2>
        <Button to="/homes">View Details<Arrow /></Button>
        </Column>
        <Column data-aos="fade-left"
                data-aos-delay="300"
                data-aos-offset="250"
                style={{marginBottom: "5rem",
                        marginTop: "2rem",
                        paddingRight:"-2rem"}}>
        <img src={ImageOffer2} alt="home" />
        <h2>3 Bed 2 Bath House in Tampa, Florida</h2>
        <Button to="/homes">View Details<Arrow />
        </Button> 
        </Column>
      </Container>
    </Section>
  )
}