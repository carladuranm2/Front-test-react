
import React from "react";
import './index.css';

export default function Card(props){
    return (
        <div className="card-container">
        <div className="card">
            <div className="container" onClick={() => props.getValueDetailId(props.data.id)} >
                <h4><b>{props.data.brand}</b></h4>
                <img src={props.data.imgUrl} alt="productPhone" />
            </div>
            <div>
                <h5>{props.data.model}</h5>
                <span><strong>${props.data.price}</strong></span>
            </div>
        </div>
    </div>
    )
}