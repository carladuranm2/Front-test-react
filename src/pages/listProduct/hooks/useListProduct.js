import { useEffect, useState } from "react";

export default function useListProduct () {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getListProduct();
    }, []);
    async function getListProduct () {
        try {
            const response = await fetch('https://front-test-api.herokuapp.com/api/product');
            const parseResult = await response.json();
            setProduct(parseResult);
            if (response) {
                console.log("Response code 200, OK!");
            }
        } catch (error) {
            console.log(error, " Error!");
        }
    }
    return {
        product
    }
}