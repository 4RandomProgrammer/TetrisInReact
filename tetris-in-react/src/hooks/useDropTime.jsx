import { useState, useCallback, useEffect } from "react";

const defaultDropTime = 1000;
const minimumDropTime = 100;
const speedIncrement = 0;

export const useDropTime = ({ gameStats }) => {

    const [dropTime, setDropTime] = useState(defaultDropTime);
    const [previousDroptime, setPreviousDroptime] = useState();

    const resumeDropTime = useCallback(() => {
        if(!previousDroptime) {
            return;
        }
        setDropTime(previousDroptime);
        setPreviousDroptime(null)
    }, [previousDroptime])

    const pauseDropTime = useCallback(() => {
        if (dropTime) {
            setPreviousDroptime(dropTime);
        }
        setDropTime(null);
    }, [dropTime,setPreviousDroptime]);

    useEffect(() => {
        const speed = speedIncrement * (gameStats.level - 1);
        const newDropTime = Math.max(defaultDropTime - speed, minimumDropTime);

        setDropTime(newDropTime);
    }, [gameStats.level, setDropTime]);

    return [dropTime, pauseDropTime, resumeDropTime];
};