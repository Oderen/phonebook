import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLogged);
  return !isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
