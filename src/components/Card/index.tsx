import React from 'react'
import { CardProps } from './Types'
import { CardWrapper } from './Card.styles'

const Card = (props: CardProps) => {
    return (
        <CardWrapper {...props}>

        </CardWrapper>        
    )
}

export default Card
