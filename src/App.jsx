import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/index';

import MainLayout from './pages/MainLayout';
import EventsPage from './pages/EventsPage';
import EventPage from './pages/EventPage';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <EventsPage /> },
      { path: '/events/:eventId', element: <EventPage /> }
    ]
  }
])

function App() {
  return(
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  )
}

export default App;
