import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Blog from './components/Blog/Blog';
import Statastics from './components/Statastics/Statastics'
import Main from './Layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main> , 
      children:[
        {path: '/', element:<Home></Home> },
        {path: '/home', element:<Home></Home> },
        {path: '/topics', element:<Topics></Topics> },
        {path: '/statastics', element:<Statastics></Statastics> },
        {path: '/blog', element:<Blog></Blog> }
    ]},
  ])
  return (
    <div className="App">

   
   
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
