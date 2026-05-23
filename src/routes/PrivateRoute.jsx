import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from './routes';

// Wrap protected routes with this component.
// Replace `isAuthenticated` with your actual auth check.
const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.HOME} replace />;
};

export default PrivateRoute;
