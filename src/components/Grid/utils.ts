export const generateGridAreas = (nbColumns: number, nbRows: number): string[][] => {
    let grid = Array(nbRows)
    for (let i = 0; i < nbRows; i++)
        grid[i] = Array(nbColumns).fill('.')
    console.log('2D-GRID->',grid)
    console.log('1D-GRID->',getGridTemplateAreas(grid))
    console.log('0D-GRID->',generateGridAreas2(nbColumns, nbRows))
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

export const generateGridAreas2 = (nbColumns: number, nbRows: number): string[] => {
    let grid: string[] = []
    let dot: string = '.'
    let dots: string = dot.repeat(nbColumns)
    let init = '"'
    init += dots + '"'
    for (let i = 0; i < nbRows; i++)
        grid.push(init)
    return grid
}