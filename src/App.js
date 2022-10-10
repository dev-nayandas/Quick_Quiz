import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {path: '/', element:<Home></Home> },
    {path: '/home', element:<Home></Home> },
    {path: '/topics', element:<Topics></Topics> }
  ])
  return (
    <div className="App">

      <NavBar></NavBar>
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
