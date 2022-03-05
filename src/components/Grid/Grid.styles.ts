import styled from 'styled-components'
import { GridProps, TileProps } from './Types';

export const GridLayout = styled.div<GridProps>`
    display: ${(props: GridProps) => (props.inlineGrid ? 'inline-grid' : 'grid')};
    grid-template-columns: repeat(${(props: GridProps)=>(props.nbColumns + ', ' + props.spaceBtwnColumns)});
    grid-template-rows: repeat(${(props: GridProps)=>(props.nbRows + ', ' + props.spaceBtwnRows)});
    grid-template-areas: ${(props: GridProps) => (props.gridTemplateAreas)};
`;

export const GridTile = styled.div<TileProps>`
    grid-area: ${(props: TileProps) => (props.area)};
    align-self: ${(props: TileProps) => (props.alignSelf ? props.alignSelf : 'center')};
    justify-self: ${(props: TileProps) => (props.justifySelf ? props.justifySelf : 'center')};
`;