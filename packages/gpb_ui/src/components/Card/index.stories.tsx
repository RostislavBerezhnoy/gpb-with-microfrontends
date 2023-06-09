import React, { FC } from 'react'
import { Card } from './Card'
import { Box } from '../Box'
import { cardMocks } from './mocks'

export default {
  title: 'Components/Card',
  component: Card,
}

export const CardDefault: FC = () => (
  <Box flexDirection='row'>
    {cardMocks.map((card, i) => (
      <Box key={i} margin={10}>
        <Card {...card} />
      </Box>
    ))}
  </Box>
)
