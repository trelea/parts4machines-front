import AutoPart from '@/pages/AutoParts/AutoPart';
import AutoParts from '@/pages/AutoParts/AutoParts';
import Cart from '@/pages/Cart/Cart';
import Index from '@/pages/Index/Index';
import Services from '@/pages/Services/Services';
import Vehicle from '@/pages/Vehicles/Vehicle';
import Vehicles from '@/pages/Vehicles/Vehicles';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  { path: '/', element: <Index />, index: true },
  { path: '/:lng', element: <Index />, index: true },

  { path: '/services', element: <Services /> },
  { path: '/:lng/services', element: <Services /> },

  { path: '/cart', element: <Cart /> },
  { path: '/:lng/cart', element: <Cart /> },

  { path: '/vehicles', element: <Vehicles /> },
  { path: '/:lng/vehicles', element: <Vehicles /> },

  { path: '/vehicles/:id', element: <Vehicle /> },
  { path: '/:lng/vehicles/:id', element: <Vehicle /> },

  { path: '/autoparts', element: <AutoParts /> },
  { path: '/:lng/autoparts', element: <AutoParts /> },

  { path: '/autoparts/:id', element: <AutoPart /> },
  { path: '/:lng/autoparts/:id', element: <AutoPart /> },
]);
