import React from 'react'
import { TextProps } from './Types'
import { TextContainer, H1, H2, P } from './Text.styles'

const Text = (props: TextProps) => {
    return (
        <TextContainer>
            {props.title ? <H1>{props.title}</H1> : ''}
            {props.subtitle ? <H2>{props.subtitle}</H2> : ''}
            {props.paragraph ? <P>{props.paragraph}</P> : ''}
        </TextContainer>        
    )
}

export default Text
