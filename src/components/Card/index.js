
import React from "react";
import './index.css';

export default function Card({data, getValueDetailId}){
    return (
        <div className="card-container">
        <div className="card">
            <div className="container" onClick={() => getValueDetailId(data.id)} >
                <h4><b>{data.brand}</b></h4>
                <img src={data.imgUrl} alt="productPhone" />
            </div>
            <div>
                <h5>{data.model}</h5>
                <span><strong>${data.price || 'Sin precio'}</strong></span>
            </div>
        </div>
    </div>
    )
}