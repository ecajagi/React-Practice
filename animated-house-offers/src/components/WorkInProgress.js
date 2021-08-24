import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import workImage from '../images/work-in-progress.png'

const Section = styled.section `
width: 100%;
height:100%;
padding: 4rem 0rem;
`

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:2rem 2rem;


img {
  object-fit: cover;
}

h3 {
  margin-bottom:1rem;
  color:#C98932;
}
`

const WorkInProgress = () => {
    return (
        <Section>
            <Container>
                <h3>I am working on creating an example catalogue page.</h3>
                <Button style={{backgroundColor:"#C98932"}} to="/" primary='true'>
                    Back to homepage
                </Button>
                <img src={workImage} alt='work in progress'/>
            </Container>
        </Section>
    )
}

export default WorkInProgress
