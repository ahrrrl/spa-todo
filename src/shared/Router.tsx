import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import TodoPage from '../page/TodoPage';
import Layout from './Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<TodoPage />} />
    </Route>
  )
);

export default router;
