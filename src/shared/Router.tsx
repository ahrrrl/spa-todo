import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import TodoPage from '../page/TodoPage';
import Layout from './Layout';
import TodoDetailPage from '../page/TodoDetailPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<TodoPage />} />
      <Route path='/TodoDetail/:id' element={<TodoDetailPage />} />
    </Route>
  )
);

export default router;
