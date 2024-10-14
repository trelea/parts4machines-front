import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import '@/config/i18n';

export default function App() {
  return <RouterProvider router={router} />;
}
