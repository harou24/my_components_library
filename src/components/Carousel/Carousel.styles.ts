import styled, {keyframes} from 'styled-components'

export const CarouselWrapper = styled.div`
    overflow: hidden;
`;

type Props = {
    active: string
}

const runAnimation = (props: Props) => keyframes`
    100% {
        transform: translateX(${props.active});
    }
`;
export const CarouselInner = styled.div<Props>`
    white-space: nowrap;
    animation: ${(props: Props) => runAnimation(props)} 1s 1;
    transition: transform 0.3s;
`;

export const CarouselItem = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 100%;
    background-color: green;
    color: #fff;
`;

export const Indicators = styled.div`
    display: flex;
    justify-content: center;
`;