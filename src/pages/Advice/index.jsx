import React, { useEffect, useState } from 'react'

import axios from 'axios'

import dice from 'assets/images/icon-dice.svg'
import divider from 'assets/images/pattern-divider-desktop.svg'

import { Container, Dice, Divider, Slip, Title,PositionDice } from './card.style'

const Advice = () => {
  const [slipData, setSlipData] = useState({})

  const getSlipData = async() => {
    let { data } = await axios.get('https://api.adviceslip.com/advice')
    setSlipData(data.slip)
  }

  useEffect(() => {
    getSlipData()
  }, [])

  return (
    <Container>
      <Title>ADVICE #{slipData.id}</Title>
      <Slip>"{slipData.advice}"</Slip>
      <Divider>
        <img src={divider} alt='divider'/>
      </Divider>
      <PositionDice onClick={getSlipData}>
        <Dice>
          <img src={dice} alt='dice'/>
        </Dice>
      </PositionDice>
    </Container>
  )
}

export default Advice