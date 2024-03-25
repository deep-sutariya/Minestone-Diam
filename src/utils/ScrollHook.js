"use client"

import { useScroll } from "framer-motion";

const ScrollHook = () => {
    const { scrollYProgress } = useScroll();
    return scrollYProgress;
}

export default ScrollHook;