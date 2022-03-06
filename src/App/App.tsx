import React from 'react';
import Grid from '../components/Grid';
import { gridProps } from '../components/Grid/exemple'
import { GlobalStyle } from './App.styles';
import Card from '../components/Card';
import { CardProps } from '../components/Card/Types';
import { TextProps } from '../components/Text/Types';
import Text from '../components/Text'

let text: TextProps = {
    paragraph: 'hello',
}

let cardProps: CardProps = {
    height: '100px',
    width: '100px',
    isCursorPointer: true,
    borderRadius: '100%',
    boxShadow: '1px 1px black',
    bg: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(54,158,255,1) 100%)',
    element: <Text {...text}/>
}

export default () => {
    return (
        <>
            <GlobalStyle/>
            <Card {...cardProps}/>
        </>
    )
};