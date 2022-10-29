import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addshopCar } from "../../../../../app/features/shopCar/shopCarSlice";
import {baseUrl} from '../../../../../config/index';
export default function useActionAddProduct (detail) {
    const dispatch = useDispatch()
    const [formAddProduct, setFormAddProduct] = useState(
        {
            id: '1',
            colorCode: '1',
            storageCode:'2'
        }
    )
    function getDataFormSelect (event) {
        setFormAddProduct(
            {
                ...formAddProduct,
                [event.target.name]: event.target.value
            },
        )
    }
    function submit (e) {
        e.preventDefault();
        addProduct();
    }
    useEffect(() => {
        if (detail?.id) {
            setFormAddProduct(
                {
                    id: detail?.id,
                    colorCode: '1',
                    storageCode: '2'
                }
            )

        }
    }, [detail?.id]);
    async function addProduct () {
        try {
            const response = await fetch( `${baseUrl}/cart`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify(formAddProduct)
            });
            const parseResult = await response.json();
            dispatch(addshopCar(parseResult.count))
        } catch (error) {
            console.log(error, "Error!");
        }
    }

    return {
        addProduct,
        getDataFormSelect,
        submit
    }
}