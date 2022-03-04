import {GridProps} from './Types'

export const generateGridAreas = (nbColumns: number, nbRows: number): string[][] => {
    let grid = Array(nbRows)
    for (let i = 0; i < nbRows; i++)
        grid[i] = Array(nbColumns).fill('.')
    console.log('2D-GRID->',grid)
    console.log('1D-GRID->',getGridTemplateAreas(grid))
    return grid
}

export const getGridTemplateAreas = (grid: string[][]) => {
    let res: string[] = []
    for (let i = 0; i < grid.length; i++) {
        let str = '" '
        for (let j = 0; j < grid[i].length; j++) {
            str += grid[i][j]
            str += ' '
        }
        str += '"'
        res.push(str.toString())
    }
    return res
}

const placeTiles = (gridProps: GridProps) => {

    for (let i = 0; i < gridProps.tiles.length; i++) {
        let tile = gridProps.tiles[i]
        gridProps.gridAreas[tile.posY][tile.posX] = tile.area
    }
}

export const initGrid = (props: GridProps) => {
    let gridProps: GridProps = {...props}
    gridProps.gridAreas = generateGridAreas(props.nbColumns, props.nbRows)
    placeTiles(gridProps)
    gridProps.gridTemplateAreas = getGridTemplateAreas(gridProps.gridAreas)
    return gridProps
}