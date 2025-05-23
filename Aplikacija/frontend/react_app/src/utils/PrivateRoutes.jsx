import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoutes = ({role}) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  if(token) {
    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
    
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('token'); 
          return <Navigate to="/login" />;
        }

        if (decodedToken.Type !== role) {
            return <Navigate to="/" />;
          }

      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token'); 
        return <Navigate to="/login" />;
      }
  }
  return <Outlet/>;
};

export default PrivateRoutes;
