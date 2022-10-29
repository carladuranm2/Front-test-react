import React from "react";
import Card from "../card";
import './index.css'

export default function Description ({ detail }) {
    return (
        <div>
            <Card title={"Description"}>
                <div className="list">
                    <ul>
                        <li> <span>Brand:</span>{detail.brand}</li>
                        <li><span>Model:</span>{detail.model}</li>
                        <li><span>Price:$</span>{detail.price}</li>
                        <li><span>CPU:</span>{detail.cpu}</li>
                        <li><span>RAM:</span>{detail.ram}</li>
                        <li><span>Screen Resolution:</span>{detail.displayResolution}</li>
                        <li><span>Battery:</span>{detail.battery}</li>
                        <li><span>Camera:</span>{detail.secondaryCmera}</li>
                        <li><span>Dimension:</span>{detail.dimentions}</li>
                        <li><span>weight:</span>{detail.weight}</li>
                    </ul>
                </div>
            </Card>
        </div>
    )
}