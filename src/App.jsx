import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import MainLayout from './pages/MainLayout';
import { Provider } from 'react-redux';
import { store } from './store/index';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <EventsPage /> },
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
