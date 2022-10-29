import React from "react";
import Description from "./components/description";
import useDetailProduct from './hooks/useDetailProduct';
import Actions from './components/actions/index';
import Loader from '../../components/loader/index'
import './index.css';

export default function Details () {
    const { detail, load } = useDetailProduct();
    return (
        <div>
            {load ? (
                <div className='container-load'>
                    <Loader />
                </div>
            ) : (
                <div className="container-details" >
                    <div className="containerDetails containerImage">
                        <img className="image-container" src={detail.imgUrl} alt="detail" />
                    </div>
                    <div>
                        <div className="containerDetails">
                            <Description detail={detail} />
                        </div>
                        <div className="containerDetails">
                            <Actions detail={detail} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}