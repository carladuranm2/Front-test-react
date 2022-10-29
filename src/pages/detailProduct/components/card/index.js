import React from "react";
import './index.css';

export default function Card ({children, title}) {
    return (
        <div>
            <div className="title-header">
                {title}
            </div>
            {children}
        </div>
    )
}