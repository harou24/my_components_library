import React from 'react'
import { GridLayout, GridTile } from './Grid.styles'
import { GridProps, TileProps } from './Types'
import { initGrid } from './utils'

const Tile = (gridProps: GridProps, tileProps: TileProps) => {
    console.log("AFTER->",gridProps)
    return (
        <GridTile {...tileProps}>
            {tileProps.element}
        </GridTile>
    )
}

const Grid = (props: GridProps) => {

    let gridProps: GridProps = initGrid(props)

    return (
           <GridLayout {...gridProps}>
               {gridProps.tiles.map((tile, id) => Tile(gridProps, tile))}
           </GridLayout> 
    )
}

export default Grid
