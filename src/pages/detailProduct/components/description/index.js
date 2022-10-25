import React from "react";
import './index.css'

export default function Description(props){
    return (
        <div>
            <div className="description-title">
            Descripcion
            </div>
            <div className="list">
                <ul>
                    <li> <span>Brand:</span>{props.detail.brand}</li>
                    <li><span>Model:</span>{props.detail.model}</li>
                    <li><span>Price:$</span>{props.detail.price}</li>
                    <li><span>CPU:</span>{props.detail.cpu}</li>
                    <li><span>RAM:</span>{props.detail.ram}</li>
                    <li><span>Screen Resolution:</span>{props.detail.displayResolution}</li>
                    <li><span>Battery:</span>{props.detail.battery}</li>
                    <li><span>Camera:</span>{props.detail.secondaryCmera}</li>
                    <li><span>Dimension:</span>{props.detail.dimentions}</li>
                    <li><span>weight:</span>{props.detail.weight}</li>
                </ul>
            </div>
        </div>
    )
}