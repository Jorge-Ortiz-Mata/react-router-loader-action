import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/index';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventPage from './pages/EventPage';

import MainLayout from './pages/MainLayout';
import EventLayout from './pages/EventLayout';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: ':eventId', element: <EventPage /> }
        ]
      },
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
