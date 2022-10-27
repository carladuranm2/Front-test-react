
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function useDetailProduct () {
    const [detail, setDetail] = useState({});
    const [load,setLoad] = useState(false);
    let params = useParams();

    useEffect(() => {
        getDetailProduct();
    }, []);
    async function getDetailProduct () {
        setLoad(true);
        try {
            const response = await fetch(`https://front-test-api.herokuapp.com/api/product/${params.id}`);
            const parseResult = await response.json();
            setDetail(parseResult);
            setLoad(false)
        } catch (error) {
            console.log(error, " Error!");
            setLoad(false);
        }
    }

    return {
        detail,
        load
    }
}