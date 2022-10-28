import Error404 from '../ui/Pages/Error404/Error404';
import { RouteType } from './route-types';

export const publicRoutes: RouteType[] = [
  {
    path: '/*',
    Component: Error404,
  },
];
