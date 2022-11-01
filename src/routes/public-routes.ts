import Error404 from 'ui/Pages/Error404/Error404';
import { RouteType } from 'routes/route-types';
import { UNMATCHED } from 'utils/constants/RoutesPathConstants';

export const publicRoutes: RouteType[] = [
  {
    path: UNMATCHED,
    Component: Error404,
  },
];
