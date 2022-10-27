import Card from '../../components/card/index';
import './indez.css';
import Search from '../../components/inputSearch';
import useListProduct from './hooks/useListProduct';
import { useNavigate } from "react-router-dom";
import Loader from '../../components/loader';

export default function ListProduct () {
    const { product, filterProduct, setProduct, load } = useListProduct();
    let navigate = useNavigate();
    function getValueDetailId (id) {
        navigate(`/userDetail/${id}`);
    }
    return (
        <div>
            <div className="container-input-search">
                <Search filterProduct={filterProduct} setProduct={setProduct} >
                </Search>
            </div>
            {load ? <div className='container-load'>
                <Loader></Loader>
            </div> : <div className="list-product">
                {product.map(data => (
                    <Card key={data.id} data={data} getValueDetailId={getValueDetailId} />
                ))}
            </div>}

        </div>
    )
}