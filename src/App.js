import './App.css';
import { RouterProvider } from 'react-router';
import router from './routes'
import Header from './components/header';
function App () {
  return (
    <div>
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
