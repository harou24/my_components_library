export const generateGridAreas = (nbColumns: number, nbRows: number): string[] => {
    let grid: string[] = []
    let dot: string = '.'
    let dots: string = dot.repeat(nbColumns)
    let init = '"'
    init += dots + '"'
    for (let i = 0; i < nbRows; i++)
        grid.push(init)
    return grid
}