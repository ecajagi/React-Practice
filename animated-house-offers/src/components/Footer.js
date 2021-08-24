import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';

const Section = styled.section`
width: 100%;
height:100%;
padding: 2rem 2rem;
display:fixed;
background-color: #000d1a;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow:1;
  justify-content: center;
  padding: 3rem calc((100vw - 1300px) / 2);

`

const FooterLeft = styled.div`
  height: 100%;
  display: column;
  align-items: center;
  ;

h1 {
  margin-bottom: 0.5rem;
  font-size: clamp(2rem, 8vw, 3rem);
  color: #fff;
}

p {
  color:#fff;
  margin-top:3rem;
  margin-bottom:-4rem;
  font-size:12px;
}
`;

const SocialIcons= styled.div`
margin-left:0.5rem;
margin-top:3rem;

`

const FooterRight = styled.div`
padding: 1rem;
display: flex;
flex-direction: column;
flex-grow:1;
align-items: center;
color:#fff;

p {
  cursor: pointer;
  margin-top:1.5vh;
  font-weight:bolder;
  }
`;

// create a 3fr 1fr section, next display:flex; Footer container 3fr on the left big "Let's find your dream home." social iconst below and 1fr on the side 

const Footer = () => {
  return (
    <Section>
      <Container>
          <FooterLeft>
            <h1>Let's find your dream home.</h1>
            <SocialIcons>
              <SocialIcon url="" network="twitter" bgColor="#C98932" style={{marginTop:"1vh", marginLeft:"2vh"}}/>
              <SocialIcon url="" network="facebook" bgColor="#C98932" style={{marginTop:"1vh", marginLeft:"2vh"}}/>
              <SocialIcon url="" network="linkedin" bgColor="#C98932" style={{marginTop:"1vh", marginLeft:"2vh"}}/>
              <SocialIcon url="" network="email" bgColor="#C98932" style={{marginTop:"1vh", marginLeft:"2vh"}}/>
            </SocialIcons>
            <p>This site was made to practice ReactJS and information provided is inaccurate.</p>
          </FooterLeft>
          <FooterRight>
            <p>Contact</p>
            <p>Support</p>
            <p>Offices</p>
            <p>Catalogue</p>
          </FooterRight>
      </Container>
    </Section>
  )
}

export default Footer
