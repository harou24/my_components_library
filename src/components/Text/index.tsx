import React from 'react'
import { TextProps } from './Types'
import { TextContainer, H1, H2, P } from './Text.styles'

const Text = (props: TextProps) => {
    return (
        <TextContainer>
            <H1>{props.title}</H1>
            <H2>{props.subtitle}</H2>
            <P>{props.paragraph}</P>
        </TextContainer>        
    )
}

export default Text
