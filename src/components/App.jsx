import { useEffect, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/auth-operations';
import { useAuth } from '../hooks/useAuth';

const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));
const NotFoundPage = lazy(() => import('../pages/NotFound'))
const HomePage = lazy(() => import('../pages/Home'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          <Route path="*" element={<NotFoundPage />} />
             </Route>   
    </Routes>
  );

};
