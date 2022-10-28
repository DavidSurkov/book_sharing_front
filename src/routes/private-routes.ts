import { BOOK, HOME } from '../utils/constants/RoutesPathConstants';
import BookPage from '../ui/Pages/BookPage/BookPage';
import Home from '../ui/Pages/Home/Home';
import { RouteType } from './route-types';

export const privateRoutes: RouteType[] = [
  {
    path: BOOK,
    Component: BookPage,
  },
  {
    path: HOME,
    Component: Home,
  },
];
