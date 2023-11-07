import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../error-pages';
import App from '../App';

const routes = createBrowserRouter([
    {
      path: '/',
      element:<App />,
      errorElement:<ErrorPage />, 
    },
    
  ]);
  
  export default routes;
  