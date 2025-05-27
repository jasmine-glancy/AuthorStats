import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";

export default function toTopButton() {
    const [hovered, setHovered] = useState(false);

    const arrowIcon = hovered
        ? <img src="/up-arrow-lighter.svg" alt="Up Arrow" />
        : <img src="/up-arrow.svg" alt="Up Arrow Lighter" />

    return (
        <div>
            <ScrollToTop 
                smooth 
                style={{ background: "none", boxShadow: "none" }} 
                component={arrowIcon}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)} />
        </div>
    );
}