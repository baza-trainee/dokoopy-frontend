import { useState } from "react";

export const AdminEditIcon = () => {
    const [isHovered, setHovered] = useState(false);
    return (
        <svg width="29" 
        height="28" 
        viewBox="0 0 29 28" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`admin-edit-icon ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
        <path d="M14.5 22.5607H23.5" 
        stroke="#646464" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        />
        <path 
        d="M19 6.06065C19.3978 5.66283 19.9374 5.43933 20.5 5.43933C20.7786 5.43933 21.0544 5.4942 21.3118 5.60081C21.5692 5.70741 21.803 5.86367 22 6.06065C22.197 6.25763 22.3532 6.49149 22.4598 6.74886C22.5664 7.00623 22.6213 7.28208 22.6213 7.56065C22.6213 7.83923 22.5664 8.11507 22.4598 8.37244C22.3532 8.62982 22.197 8.86367 22 9.06065L9.5 21.5606L5.5 22.5606L6.5 18.5606L19 6.06065Z" 
        stroke="#646464" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        />
        </svg>  
    );
 };