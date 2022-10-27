import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPredataCountCart } from "../../../app/features/shopCar/shopCarSlice";
import { findDataWithExpiration } from "../../../utils";

export default function useListProduct () {
    const [product, setProduct] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const dispatch = useDispatch()
    function setti() {
        const result = findDataWithExpiration('cantProdut')
        if (result) {
            console.log(result)
            dispatch(setPredataCountCart(result))
        }
    }
    useEffect(() => {
        getListProduct();
        setti()
    }, []);
    async function getListProduct () {
        try {
            const response = await fetch('https://front-test-api.herokuapp.com/api/product');
            const parseResult = await response.json();
            setProduct(parseResult);
            setFilterProduct(parseResult);
            if (response) {
                console.log("Response code 200, OK!");
            }
        } catch (error) {
            console.log(error, " Error!");
        }
    }
    return {
        product,
        filterProduct,
        setProduct
    }
}