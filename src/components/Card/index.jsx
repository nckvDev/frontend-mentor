import React, { useCallback, useEffect, useState } from 'react'
import divider from '../../assets/images/pattern-divider-desktop.svg'
import dice from '../../assets/images/icon-dice.svg'
import { Container, Dice, Divider, Slip, Title,PositionDice } from './card.style'
import axios from 'axios'

const Card = () => {
  const [slipData, setSlipData] = useState({})

  const getSlipData = useCallback( async() => {
    let { data } = await axios.get('https://api.adviceslip.com/advice')
    setSlipData(data.slip)
  }, [])

  useEffect(() => {
    getSlipData()
  }, [getSlipData])

  return (
    <Container>
      <Title>ADVICE #{slipData.id}</Title>
      <Slip>"{slipData.advice}"</Slip>
      <Divider>
        <img src={divider} alt='divider'/>
      </Divider>
      <PositionDice onClick={() => getSlipData()}>
        <Dice>
          <img src={dice} alt='dice'/>
        </Dice>
      </PositionDice>
    </Container>
  )
}

export default Card