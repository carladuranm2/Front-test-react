import React from "react";
import Card from '../../components/Card/index';
import './indez.css';

export default function ListProduct () {
    const data = {
        name: " Carla Viviana Duran Mariota",
        precio: "2500",
        details: "hola carla"
    }
    return (

        <div>
            <Search>
            </Search>
        <div className="list-product">
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
            <Card data={data} />
        </div>
        </div>
    )
}