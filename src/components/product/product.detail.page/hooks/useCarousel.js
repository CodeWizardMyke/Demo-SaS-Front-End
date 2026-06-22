import { useState } from "react";

export function useCarousel(images = []) {
    
    const length = images.length;

    const [current, setCurrent] = useState(0);

    const prevIndex = current === 0
        ? length - 1
        : current - 1;

    const nextIndex = current === length - 1
        ? 0
        : current + 1;

    function setPrev() {
        setCurrent(prev =>
            prev === 0 ? length - 1 : prev - 1
        );
    }

    function setNext() {
        setCurrent(prev =>
            prev === length - 1 ? 0 : prev + 1
        );
    }

    
    if (!length) {
        return {
            currentImage: null,
            prevImage: null,
            nextImage: null,
            current: 0,
            setPrev: () => {},
            setNext: () => {},
        };
    }
    
    return {
        curretImage: images[current],
        prevImage: images[prevIndex],
        nextImage: images[nextIndex],
        current,
        setPrev,
        setNext,
    };
}