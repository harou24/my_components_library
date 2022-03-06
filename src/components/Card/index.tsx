import React from 'react'
import { CardProps } from './Types'
import { CardWrapper } from './Card.styles'

const Card = (props: CardProps) => {
    return (
        <CardWrapper {...props}>
            {props.element}
        </CardWrapper>        
    )
}

export default Card
