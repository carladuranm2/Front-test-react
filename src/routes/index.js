import { createBrowserRouter } from 'react-router-dom';
import ListProduct from '../pages/List-product';
import Details from '../pages/Detail-Product';


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