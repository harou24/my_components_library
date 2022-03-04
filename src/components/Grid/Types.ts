export type GridProps = {
    nbRows: number,
    nbColumns: number,
    spaceBtwnRows?: string,
    spaceBtwnColumns?: string,
    gridAreas?: string[],
    generateGridAreas?: (nbColumns: number, nbRows: number) => string[],
}

export type TileProps = {
    area: string, 
    posX: number,
    posY: number,
}