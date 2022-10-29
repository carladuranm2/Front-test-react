import {useEffect} from 'react'
import './App.css';
import router from './routes'
import Header from './components/header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { findDataWithExpiration } from './utils';
import { setPredataCountCart } from './app/features/shopCar/shopCarSlice';
import { useDispatch } from 'react-redux';
function App () {
  const dispatch = useDispatch()
  function setti() {
    const result = findDataWithExpiration('cantProdut')
    if (result) {
        dispatch(setPredataCountCart(result))
    }
}

useEffect(() => {
  setti()
}, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {router.map(route => (
          <Route key={route.path} path={route.path} element={route.element}/>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
