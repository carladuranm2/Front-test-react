import Card from '../../components/card/index';
import './indez.css';
import Search from '../../components/inputSearch';
import useListProduct from './hooks/useListProduct';
import { useNavigate } from "react-router-dom";

export default function ListProduct () {
    const { product } = useListProduct();
    let navigate = useNavigate();
    function getValueDetailId (id) {
        navigate(`/userDetail/${id}`);
    }
    return (
        <div>
            <Search>
            </Search>
            <div className="list-product">
                {product.map(data => (
                    <Card key={data.id} data={data} getValueDetailId={getValueDetailId} />
                ))}
            </div>
        </div>
    )
}