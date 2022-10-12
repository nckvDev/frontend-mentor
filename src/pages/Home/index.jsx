import React from 'react'
import { Link } from 'react-router-dom'
import { Container, AdviceLink } from './home.style'

const Home = () => {
  return (
    <Container>
      <AdviceLink>
        <Link to="advice">Advice</Link>
      </AdviceLink>
    </Container>
  )
}

export default Home
