import { FORGOT_PASSWORD, LOGIN, REGISTRATION } from '../utils/constants/RoutesPathConstants';
import Login from '../ui/Pages/Login/Login';
import Registration from '../ui/Pages/Registration/Registration';
import ForgotPassword from '../ui/Pages/ForgotPassword/ForgotPassword';
import { RouteType } from './route-types';

export const authRoutes: RouteType[] = [
  {
    path: LOGIN,
    Component: Login,
  },
  {
    path: REGISTRATION,
    Component: Registration,
  },
  {
    path: FORGOT_PASSWORD,
    Component: ForgotPassword,
  },
];
