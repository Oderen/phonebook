import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import Loader from './Loader/Loader';

import { fetchCurrentUser } from '../redux/ApiOperations';

const RegisterPage = lazy(() => import('../pages/RegisterPage.js'));
const LoginPage = lazy(() => import('../pages/LoginPage.js'));
const ContactsPage = lazy(() => import('../pages/PhonebookPage'));

const App = () => {
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);
  const isRefreshingCurrentUser = useSelector(state => state.auth.isRefreshing);

  /* eslint-disable */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    dispatch(fetchCurrentUser());
  }, []);
  /* eslint-enable */

  return isRefreshingCurrentUser ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/register"
          element={<PublicRoute redirectTo="/" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
