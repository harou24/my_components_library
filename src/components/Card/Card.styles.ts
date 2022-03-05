import styled from 'styled-components'
import { CardProps } from './Types';

export const CardWrapper = styled.div<CardProps>`
    background-color: ${(props: CardProps) => (props.bgColor)};
    height: ${(props: CardProps) => (props.height)};
    width: ${(props: CardProps) => (props.width)};
`;