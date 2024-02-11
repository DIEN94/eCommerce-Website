import {useCallback, useRef} from "react";


interface IUseDebounceProps {
    callback: (...args: any[]) => void;
    delay: number;
}

export function useDebounce({ callback, delay }: IUseDebounceProps) {
    const timer = useRef<NodeJS.Timeout>();

    const debouncedCallback = useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay]);

    return debouncedCallback;
}