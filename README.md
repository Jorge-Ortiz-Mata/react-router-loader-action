# React - Events

## Index

- [React Routes - Loader](#react-routes---loader)

## React Routes - Loader.

We can use the loader() method to execute a block of code before render the compnent.

* App.jsx

```js
import EventsPage, { getDummyData } from './pages/EventsPage';
....
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
```

* EventsPage.jsx

```js
import { useLoaderData } from "react-router-dom";

export default const EventsPage = () => {
  const response = useLoaderData();
  console.log(response);

  return(
    <section className="flex flex-col w-full items-center justify-center py-10">
      <h2 className="font-bold text-3xl mb-10">My events.</h2>
    </section>
  );
}

export const getDummyData = () => {
  return { name: 'Jorge', country: 'México' };
}
```

We could also call the useLoaderData in child components and not from parent components.

## useNavigation - Status for requesting data.

We can use the useNavigation hook to show a message while we are getting a http response.

```js
import { Outlet, useNavigation } from "react-router-dom"

const MainLayout = () => {
  const navigation = useNavigation();

  return(
    <>
      { navigation.state === 'loading' && <h1 className="font-bold text-3xl text-center">Loading...</h1> }
      { navigation.state === 'idle' && <h1 className="font-bold text-3xl text-center">Idle...</h1> }
      { navigation.state === 'submitting' && <h1 className="font-bold text-3xl text-center">Submitting...</h1> }
    </>
  )
}

export default MainLayout;
```

## Throwing errors with loader().

We can throw an error if a request failed.

* EventsPage.jsx

```js
export const getDummyData = () => {
  throw new Response(
    JSON.stringify({ message: 'Events failed' }),
    { status: 500 }
  );
}
```

* ErrorPage.jsx

```js
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return(
    <>
      <h1 className="text-center font-bold text-2xl">An error ocurred.</h1>
      <p className="text-center font-semibold">{JSON.parse(error.data).message}</p>
    </>
  )
}

export default ErrorPage;
```

* App.jsx

```js
{
  path: '/',
  element: <MainLayout />,
  errorElement: <ErrorPage />,
  children: [...]
}
```

## Passing params with loader.

We can get the params using the loader function instead of using the URL directly.

* EventPage.jsx

```js
export async function loader({request, params}) {
  return params.eventId;
}
```

* App.jsx

```js
import EventPage, { loader as loaderEventPage } from './pages/EventPage';

...

{ path: ':eventId', element: <EventPage />, loader: loaderEventPage },
```

## Reusing a loader among routes.

We can reuse a loader method between several routes as well.

* App.jsx

```js
import EventPage, { loader as loaderEventPage } from './pages/EventPage';
....

{
  path: ':eventId',
  id: 'event-id-detail',
  loader: loaderEventPage,
  children: [
    { index: true, element: <EventPage /> },
    { path: 'edit', element: <EventEditPage /> }
  ]
},
```

* AnyRoute.jsx
```js
import { Link, useRouteLoaderData } from "react-router-dom";

const EventPage = () => {
  const eventId = useRouteLoaderData('event-id-detail');

  return(
    <section className="flex flex-col items-center m-10 border rounded shadow p-5 gap-3">
    ...

    </section>
  )
}

export default EventPage;

export async function loader({request, params}) {
  return params.eventId;
}
```
