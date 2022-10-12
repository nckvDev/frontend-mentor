import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AdviceLink = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 0.25rem;
  background: var(--dark-grayish-blue);

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: var(--neon-green);
    text-decoration: none;
  }
`

export { Container, AdviceLink }
