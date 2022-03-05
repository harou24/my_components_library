import React from 'react';
import Grid from '../components/Grid';
import { GridProps, TileProps } from '../components/Grid/Types';
import { CardProps } from '../components/Card/Types';
import Card from '../components/Card'
import Text from '../components/Text'
import { TextProps } from '../components/Text/Types';

let card: CardProps = {
    bgColor: 'red',
    height: '100px',
    width: '150px'
}

let card2: CardProps = {
    bgColor: 'blue',
    height: '100px',
    width: '150px'
}

let card3: CardProps = {
    bgColor: 'green',
    height: '100px',
    width: '150px'
}

let tileProps: TileProps = {
    area: "one",
    posX: 2,
    posY: 3,
    element: <Card {...card}></Card>,
}

let tileProps2: TileProps = {
    area: "two",
    posX: 3,
    posY: 4,
    element: <Card {...card2}></Card>,
}

let tileProps3: TileProps = {
    area: "three",
    posX: 4,
    posY: 3,
    element: <Card {...card3}></Card>,
}

let tileProps4: TileProps = {
    area: "for",
    posX: 1,
    posY: 2,
    element: <Card {...card2}></Card>,
}

let tileProps5: TileProps = {
    area: "five",
    posX: 5,
    posY: 2,
    element: <Card {...card3}></Card>,
}

let textProps: TextProps = {
    title: 'Lorem Ipsum',
    subtitle: 'This is lorem ipsum...',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
                Lorem Ipsum has been the industry standard dummy\
                Lorem Ipsum has been the industry standard dummy\
                Lorem Ipsum has been the industry standard dummy\
                Lorem Ipsum has been the industry standard dummy\
                Lorem Ipsum has been the industry standard dummy\
                Lorem Ipsum has been the industry standard dummy\
                Lorem Ipsum has been the industry standard dummy\
                Lorem Ipsum has been the industry standard dummy\
                Lorem Ipsum has been the industry standard dummy\
                Lorem Ipsum has been the industry standard dummy',
}

let tileText: TileProps = {
    area: "text",
    posX: 3,
    posY: 2,
    alignSelf: 'end',
    element: <Text {...textProps}/>
}

let tileText2: TileProps = {
    area: "text",
    posX: 2,
    posY: 2,
}

let tileText3: TileProps = {
    area: "text",
    posX: 4,
    posY: 2,
}

let gridProps: GridProps = {
    nbColumns: 7,
    nbRows: 7,
    spaceBtwnColumns: '1fr',
    spaceBtwnRows: '100px',
    tiles: [tileProps, tileProps2, tileProps3, tileProps4, tileProps5, tileText,tileText2,tileText3]
}

export default () => {
    return (
        <Grid {...gridProps}/>
    )
};