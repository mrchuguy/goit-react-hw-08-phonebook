import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/authOperations';
import { useAuth } from '../hooks/useAuth';
import { PrivateRoute, RestrictedRoute } from '../utils/routes';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('../Pages/HomePage/HomePage'));
const Registration = lazy(() =>import('../Pages/RegistrationPage/RegistrationPage'));
const Login = lazy(() => import('../Pages/LoginPage/LoginPage'));
const PhoneBook = lazy(() => import('../Pages/PhonebookPage/PhonebookPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader/>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<Registration />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<PhoneBook />} />
          }
        />
      </Route>
    </Routes>
  );
};
