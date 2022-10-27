import ListProduct from '../pages/listProduct';
import Details from '../pages/detailProduct';


const router = [
    {
        path: '/',
        element: <ListProduct />,
    },
    {
        path: '/userDetail/:id',
        element: <Details />,
    },
];

export default router;