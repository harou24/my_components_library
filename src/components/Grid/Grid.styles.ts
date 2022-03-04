import styled from 'styled-components'
import { GridProps, TileProps } from './Types';

export const GridLayout = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(${(props: GridProps)=>(props.nbColumns + ', ' + props.spaceBtwnColumns)});
    grid-template-rows: repeat(${(props: GridProps)=>(props.nbRows + ', ' + props.spaceBtwnRows)});
    grid-template-areas: ${(props: GridProps) => (props.gridAreas ? props.gridAreas : props.generateGridAreas(props.nbColumns, props.nbRows))};
    width: 100%;
    height: 100%;
`;

export const GridTile = styled.div<TileProps>`
    grid-area: ${(props: TileProps) => (props.area)};
    width: 100%;
    height: 100%;
`;