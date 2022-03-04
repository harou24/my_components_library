import React from 'react'
import { GridLayout, GridTile } from './Grid.styles'
import { GridProps, TileProps } from './Types'
import { generateGridAreas, getGridTemplateAreas } from './utils'


let tileProps: TileProps = {
    area: "Test",
    posX: 0,
    posY: 0,
}

const Tile = (gridProps: GridProps, tileProps: TileProps, element: JSX.Element) => {
    
    let currentRow = gridProps.gridAreas[tileProps.posY]
    currentRow.slice(tileProps.posX)
        
    return (
        <GridTile {...tileProps}>
            {element}
        </GridTile>
    )
}

const Grid = (props: GridProps) => {
    let gridProps: GridProps = {...props}
    gridProps.gridAreas = generateGridAreas(props.nbColumns, props.nbRows)
    gridProps.gridTemplateAreas = getGridTemplateAreas(gridProps.gridAreas)
    console.log('TEST->', gridProps)
    return (
           <GridLayout {...gridProps}>

           </GridLayout> 
    )
}

export default Grid
