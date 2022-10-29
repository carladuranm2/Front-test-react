import Card from '../../components/card/index';
import './indez.css';
import Search from '../../components/inputSearch';
import useListProduct from './hooks/useListProduct';
import { useNavigate } from "react-router-dom";
import Loader from '../../components/loader';

export default function ListProduct () {
    const { products, productsCopy, setProducts, loading } = useListProduct();
    let navigate = useNavigate();
    function getValueDetailId (id) {
        navigate(`/userDetail/${id}`);
    }
    return (
        <div>
            <div className="container-input-search">
                <Search filterProduct={productsCopy} setProduct={setProducts} >
                </Search>
            </div>
            {loading ? (
                <div className='container-load'>
                    <Loader></Loader>
                </div>
            ) : (
                <div className="list-product">
                    {(products || []).map(data => (
                        <Card key={data.id} data={data} getValueDetailId={getValueDetailId} />
                    ))}
                </div>
            )}

        </div>

    )
}