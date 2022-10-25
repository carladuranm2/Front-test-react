import { createBrowserRouter } from 'react-router-dom';
import ListProduct from '../pages/listProduct';
import Details from '../pages/detailProduct';


const router = createBrowserRouter([
    {
        path: '/',
        element: <ListProduct />,
    },
    {
        path: '/userDetail/:id',
        element: <Details />,
    },
]);

export default router;