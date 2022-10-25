import React from "react";
import Description from "./components/description";
import useDetailProduct from './hooks/useDetailProduct';
import Actions from './components/actions/index';
import './index.css';

export default function Details () {
    const { detail } = useDetailProduct();
    console.log(detail, "detailproduct");
    return (
        <div>
            <div className="container-details" >
                <div className="containerDetails containerImage">
                    <img className="image-container" src={detail.imgUrl} alt="detail" />
                </div>
                <div>
                    <div className="containerDetails">
                        <Description detail={detail}/>
                    </div>
                    <div className="containerDetails">
                        <Actions />
                    </div>
                </div>
            </div>
        </div>
    )
}