import styled from 'styled-components'
import { CardProps } from './Types';

export const CardWrapper = styled.div<CardProps>`
    background-color: ${(props: CardProps) => (props.bgColor)};
    background-image: url(${(props: CardProps) => (props.bgImage)});
    background: ${(props: CardProps) => (props.bg)};
    height: ${(props: CardProps) => (props.height)};
    width: ${(props: CardProps) => (props.width)};
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${(props: CardProps) => (props.opacity)};
    cursor: ${(props: CardProps) => (props.isCursorPointer ? 'pointer' : '')};
    border-radius: ${(props: CardProps) => (props.borderRadius)};
    box-shadow: ${(props: CardProps) => (props.boxShadow)};
`;