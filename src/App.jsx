import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import MainLayout from './pages/MainLayout';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={route} />
}

export default App;
