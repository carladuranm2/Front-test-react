import Card from '../../components/card/index';
import Search from '../../components/inputSearch';
import useListProduct from './hooks/useListProduct';
import { useNavigate } from "react-router-dom";
import Loader from '../../components/loader';
import './index.css';

export default function ListProduct () {
    const { products, productsCopy, setProducts, loading } = useListProduct();
    let navigate = useNavigate();
    function getValueDetailId (id) {
        navigate(`/userDetail/${id}`);
    }
    return (
        <div>
            <div className="container-input-search">
                <Search filterProduct={productsCopy} setProduct={setProducts} />
            </div>
            {loading ? (
                <div className='container-load'>
                    <Loader />
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