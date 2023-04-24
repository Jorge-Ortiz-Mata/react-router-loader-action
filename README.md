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

## The action() method.

We can activate an action after we click on the submit button in a Form.

* Form.jsx

```js
import { Form, useNavigate } from "react-router-dom";

const EventForm = ({event}) => {

  return(
    <Form
      method="post"
      className="flex flex-col gap-2 items-center border shadow p-5 rounded-xl"
    >
      <EventInput name='name' label='Name' defaultValue={event?.name} />
      <EventInput name='description' label='Description' defaultValue={event?.description} />
      <EventSubmit label='Create event' />
    </Form>
  )
}

export default EventForm;
```

* EventNew.jsx

```js
export const action = async ({request, params}) => {
  const data = await request.formData();
  const eventData = {
    title: data.get('name'),
    description: data.get('description'),
  }

  console.log(eventData);
  redirect('/events');
  return eventData;
}
```

* App.jsx

```js
import EventNew, { action as EventNewAction } from './pages/EventNew';
...
{
  path: 'new',
  element: <EventNew />,
  action: EventNewAction
},
```

## Activate the action() method using other elements

We can activate action methods with other methods using the useSubmit Hook from React Router.

* EventPage.jsx

```js
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

const EventPage = () => {
  const submit = useSubmit();

  const handleDeleteEvent = () => {
    const proceed = window.confirm('Are you sure you want to delete this article');

    if(proceed){
      submit(null, { method: 'delete' })
    }
  }

  return(
    <button className="p-2 text-white bg-red-600 rounded font-semibold" onClick={handleDeleteEvent}>
      Delete event
    </button>
  )
}

export default EventPage;

export async function action({params}){
  const eventId = params.eventId;
  console.log('Deleting... ' + eventId);
  return eventId;
}
```

* App.jsx

```js
import EventPage, { action as actionEventPage } from './pages/EventPage';
...
{ index: true, element: <EventPage />, action: actionEventPage },
```

## Access to data from the action() method.

We can receive the errors from the Backend and to access them, we can do this:

```ruby
render json: { errors: @user.errors }, status: :unprocessable_entity
```

* NewEvent.jsx.

```js
export const action = async ({request, params}) => {
  const response = axios.post('/users', {...});

  if(response.status === 422){
    return response;
  }

  return redirect('/users');
}
```

* FormEvent.jsx.

```js
import { useActionData } from "react-router-dom";

const EventForm = ({event}) => {
  const data = useActionData();

  return(
    <Form
      method="post"
      className="flex flex-col gap-2 items-center border shadow p-5 rounded-xl"
    >
      {
        data?.status && <div>
          There were errors. Sorry.
          <span>Status: {data.status}</span>
        </div>
      }
    </Form>
  )
}

export default EventForm;
```

We can access to the action params with useActionData Hook.
