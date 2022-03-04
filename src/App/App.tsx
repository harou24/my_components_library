import React from 'react';
import Grid from '../components/Grid';
import { GridProps, TileProps } from '../components/Grid/Types';

let tileProps: TileProps = {
    area: "one",
    posX: 2,
    posY: 2,
    element: <h1>Hello</h1>,
}

let tileProps2: TileProps = {
    area: "two",
    posX: 3,
    posY: 2,
    element: <h1>bybye</h1>,
}

let tileProps3: TileProps = {
    area: "three",
    posX: 2,
    posY: 3,
    element: <h1>helloworld</h1>,
}

let gridProps: GridProps = {
    nbColumns: 5,
    nbRows: 5,
    spaceBtwnColumns: '1fr',
    spaceBtwnRows: '100px',
    tiles: [tileProps, tileProps2, tileProps3]
}

export default () => {
    return (
        <Grid {...gridProps}/>
    )
};