import './App.css';
import router from './routes'
import Header from './components/header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App () {
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
