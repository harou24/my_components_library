import React, {useState, useEffect} from 'react'
import { useSwipeable} from 'react-swipeable'
import { CarouselWrapper, CarouselInner, CarouselItem, Indicators } from './Carousel.styles'
import { CarouselProps } from './Types'

const Item = (item: JSX.Element) => {
    return (<CarouselItem>{item}</CarouselItem>)
}


const Carousel = ({items}: CarouselProps) => {
    const [paused, setPaused] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const [run, setRun] = useState(false)

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0)
            newIndex = items.length - 1
        else if (newIndex >= items.length)
            newIndex = 0
        setActiveIndex(newIndex)
    }

    console.log('Activeindex->',activeIndex)
    return (
        <CarouselWrapper
            onMouseEnter={()=>{setPaused(true)}}
            onMouseLeave={()=>{setPaused(false)}}
        >
            <CarouselInner active={(-100).toString() + '%'}>
                {Item(items[activeIndex])}
            </CarouselInner>
            <Indicators>
                <button onClick={()=>{updateIndex(activeIndex - 1)}}>prev</button>
                <button onClick={()=>{updateIndex(activeIndex + 1)}}>next</button>
            </Indicators>
        </CarouselWrapper>
    )
}

export default Carousel
