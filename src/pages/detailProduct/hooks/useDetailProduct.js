
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function useDetailProduct () {
    const [detail, setDetail] = useState({});
    let params = useParams();

    useEffect(() => {
        getDetailProduct();
    }, []);
    async function getDetailProduct () {
        try {
            const response = await fetch(`https://front-test-api.herokuapp.com/api/product/${params.id}`);
            const parseResult = await response.json();
            setDetail(parseResult);
            if (response) {
                console.log("Response code 200, OK!");
            }
        } catch (error) {
            console.log(error, " Error!");
        }
    }

    return {
        detail 
    }
}