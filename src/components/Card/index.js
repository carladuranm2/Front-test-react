
import React from "react";
import './index.css';

export default function Card(props){
    return (
        <div className="card-container">
        <div className="card">
            {/* <div className="container" onClick={() => props.getValue(props.data.id)} > */}
                {/* <h4><b>{props.data.name}</b></h4> */}
                {/* <p>{props.data.description}</p> */}
                <h5>{props.data.name}</h5>
                {/* {props.isDetails && (
                    <p><span>Details: </span>{props.data.details}</p>
                )} */}
            {/* </div> */}
            <div className="icon-actions">
                {/* <button className="btn" onClick={() => props.deleteCard(props.data.id)}><i className="fa fa-trash"></i></button> */}
                <button className="btn"><i className="fa fa-pencil"></i></button>
                <button className="btn"><i className="fa fa-plus"></i></button>
            </div>
        </div>
    </div>
    )
}