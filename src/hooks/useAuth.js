import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  getLoading,
  getError,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
    error,
  };
};
