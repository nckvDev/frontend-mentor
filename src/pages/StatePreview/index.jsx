import React from 'react'
import { Box, Image, Total } from './preview.style'
import imgDek from 'assets/images/image-header-desktop.jpg'
import Card from 'components/Card'

const StatePreview = () => {
  const totals = [
    {
      total: '10k+',
      label: 'companies',
    },
    {
      total: '304',
      label: 'templates',
    },
    {
      total: '12M+',
      label: 'queries',
    },
  ]

  const Content = () => {
    return (
      <Box>
        <h1>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make better dicisions regarding revenue, customer experience, and
          overall efficiency.
        </p>
        <Total>
          {totals.map((value, index) => (
            <div key={index}>
              <h2>{value.total}</h2>
              <p>{value.label}</p>
            </div>
          ))}
        </Total>
      </Box>
    )
  }
  return (
    <Card>
      <Content />
      <Image src={imgDek} alt="desk" />
    </Card>
  )
}

export default StatePreview
