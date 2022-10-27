import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addshopCar } from "../../../../../app/features/shopCar/shopCarSlice";
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
        console.log(event.target.value, "value");
        setFormAddProduct(
            {
                ...formAddProduct,
                [event.target.name]: event.target.value
            },
        )
    }
    function submit (e) {
        e.preventDefault();
        console.log(formAddProduct, "datos del form");
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
            const response = await fetch(`https://front-test-api.herokuapp.com/api/cart`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify(formAddProduct)
            });
            const parseResult = await response.json();
            console.log(parseResult,":)");
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