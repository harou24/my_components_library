import React from 'react'
import { GridLayout, GridTile } from './Grid.styles'
import { GridProps, TileProps } from './Types'
import { generateGridAreas } from './utils'

let gridProps: GridProps = {
    nbColumns: 25,
    nbRows: 25,
    spaceBtwnColumns: '1fr',
    spaceBtwnRows: '100px',
    generateGridAreas: generateGridAreas,
}

let tileProps: TileProps = {
    area: "Test",
    posX: 0,
    posY: 0,
}

const Tile = (gridProps: GridProps, tileProps: TileProps, element: JSX.Element) => {
    
    if (!gridProps.gridAreas)
        gridProps.gridAreas = generateGridAreas(gridProps.nbColumns, gridProps.nbRows)
    else {
        let currentRow = gridProps.gridAreas[tileProps.posY]
        currentRow.slice(tileProps.posX)
        
    }

    return (
        <GridTile {...tileProps}>
            {element}
        </GridTile>
    )
}

const Grid = () => {
    return (
           <GridLayout {...gridProps}>
               { Tile(gridProps, tileProps, <h1>Hello</h1>) }
           </GridLayout> 
    )
}

export default Grid
