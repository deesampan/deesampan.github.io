import React, { useState } from 'react';
import './Hover_Box.css'; // Keep the CSS in a separate file for styling

function HoverBox(props) {
    const [hovered, setHovered] = useState(false);

    const context = props.context;
    const isred = props.isred;

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div 
            className="box" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>
            
            <div className={`${isred ? 'text' : 'text_red'} ${hovered ? 'fade-in' : 'fade-out'}`}>
                {context}
            </div>
        </div>
    );
}

export default HoverBox;