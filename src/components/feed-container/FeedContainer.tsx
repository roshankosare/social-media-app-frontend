import React from 'react'
import { basicComponentStyle } from '../../styles/styles'
import Card from '../card/Card'

const FeedContainer = () => {
  return (
    <div className={`h-5/6 w-full ml-5  px-3 py-3 ${basicComponentStyle}`}>
        <Card></Card>
    </div>
  )
}

export default FeedContainer