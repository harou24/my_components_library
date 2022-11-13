import React from 'react';
import Grid from '../components/Grid';
import { gridProps } from '../components/Grid/exemple'
import { GlobalStyle } from './App.styles';
import Card from '../components/Card';
import { CardProps } from '../components/Card/Types';
import { TextProps } from '../components/Text/Types';
import Text from '../components/Text'
import Carousel from '../components/Carousel';
import { CarouselProps } from '../components/Carousel/Types';
import Navigation from '../components/Nav';

let text: TextProps = {
    paragraph: 'hello',
}

let text2: TextProps = {
    paragraph: 'goodbye',
}

let cardProps: CardProps = {
    height: '100%',
    width: '100%',
    isCursorPointer: true,
    boxShadow: '1px 1px black',
    bg: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(54,158,255,1) 100%)',
    element: <Text {...text}/>
}

let cardProps2: CardProps = {
    height: '100%',
    width: '100%',
    isCursorPointer: true,
    boxShadow: '1px 1px black',
    bg: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(54,158,255,1) 100%)',
    element: <Text {...text2}/>
}
export default () => {
    let items: CarouselProps = {items: [<Card {...cardProps}/>,<Card {...cardProps2}/>,<Card {...cardProps}/>,<Card {...cardProps2}/>]}
    return (
        <>
            <GlobalStyle/>
            <Navigation/>
        </>
    )
};