import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`

const AdviceLink = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 0.25rem;
  background: var(--dark-grayish-blue);

  a {
    width: 100%;
    height: 100%;
    color: var(--neon-green);
    text-decoration: none;
    letter-spacing: 0.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export { Container, AdviceLink }
