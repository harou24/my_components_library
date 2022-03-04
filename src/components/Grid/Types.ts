export type GridProps = {
    nbRows: number,
    nbColumns: number,
    spaceBtwnRows?: string,
    spaceBtwnColumns?: string,
    gridAreas?: string[][],
    gridTemplateAreas?: string[],
    tiles?: TileProps[],
}

export type TileProps = {
    area: string, 
    posX: number,
    posY: number,
    element: JSX.Element
}