import './App.css';
import { RouterProvider } from 'react-router';
import router from './routes'
import Header from './components/Header';
function App () {
  return (
    <div>
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
