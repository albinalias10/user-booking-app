import { useEffect, useState } from "react";

//Implementing a custom hook to check if the device is mobile based on window width
export const useIsMobile = (maxMobileDim: number = 768): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < maxMobileDim); //checking the window wdith
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [maxMobileDim]);

    return isMobile;
};