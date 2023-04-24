import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/index';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import EventsPage, { getDummyData } from './pages/EventsPage';
import EventPage, { loader as loaderEventPage } from './pages/EventPage';
import EventEditPage from './pages/EventEditPage';

import MainLayout from './pages/MainLayout';
import EventLayout from './pages/EventLayout';
import EventNew, { action as EventNewAction } from './pages/EventNew';


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
          {
            path: 'new',
            element: <EventNew />,
            action: EventNewAction
          },
          {
            path: ':eventId',
            id: 'event-id-detail',
            loader: loaderEventPage,
            children: [
              { index: true, element: <EventPage /> },
              { path: 'edit', element: <EventEditPage /> }
            ]
          },
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
