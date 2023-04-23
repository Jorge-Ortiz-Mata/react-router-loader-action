import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/index';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import EventsPage, { getDummyData } from './pages/EventsPage';
import EventPage from './pages/EventPage';

import MainLayout from './pages/MainLayout';
import EventLayout from './pages/EventLayout';
import EventNew from './pages/EventNew';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          { index: true,
            element: <EventsPage />,
            loader: getDummyData
          },
          { path: ':eventId', element: <EventPage /> },
          { path: 'new', element: <EventNew /> }
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
