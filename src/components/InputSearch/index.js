
import React from "react";
import './index.css'
export default function Search({
    filterProduct,
    setProduct
}){

    const handleFilter = (e) => {
        let expresion = new RegExp(`${e.target.value.toUpperCase()}.*`, "i");
        let productFounds = filterProduct.filter(item => (expresion.test(item.brand) || expresion.test(item.model)));
        setProduct(productFounds);
        console.log(productFounds, " productofound");
    }

    return (
        <input className="TodoSearch" onChange={handleFilter} type="text" placeholder="Search.." />
    )
}