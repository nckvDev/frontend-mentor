import styled from "styled-components"

const Container = styled.div`
  padding: 3.5rem;
  border-radius: 1.25rem;
  background: var(--dark-grayish-blue);
  text-align: center;

  position: relative;
`

const Title = styled.div`
  color: var(--neon-green);
  letter-spacing: 0.25rem;
`

const Slip = styled.p`
  max-width: 450px;
  font-size: var(--font-size);
  color: var(--light-cyan);
  word-wrap: break-word;
`

const Divider = styled.div``

const PositionDice = styled.div`
  position: absolute;
  bottom: -59px;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Dice = styled.div`
  width: 60px;
  height: 60px;
  background: var(--neon-green);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  transition: all .5s;

  :hover {
    box-shadow: var(--neon-green) 0 1px 30px;
    transition-duration: .1s;
    cursor: pointer;
  }
`

export { Container, Title, Slip, Divider, Dice, PositionDice }