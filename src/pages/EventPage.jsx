import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

const EventPage = () => {
  const events = useSelector(state => state.events.events);
  const [event, setEvent] = useState(undefined);
  const eventId = useRouteLoaderData('event-id-detail');
  const submit = useSubmit();

  useEffect(() => {
    const eventFiltered = events.filter(obj => obj.id === parseInt(eventId));
    setEvent(eventFiltered[0]);
  }, [eventId, events]);

  const handleDeleteEvent = () => {
    const proceed = window.confirm('Are you sure you want to delete this article');

    if(proceed){
      submit(null, { method: 'delete' })
    }
  }

  return(
    <section className="flex flex-col items-center m-10 border rounded shadow p-5 gap-3">
      <p className="font-semibold mb-5">Event Details.</p>
      <h2 className="font-bold text-3xl">{event?.name}</h2>
      <p className="font-semibold">{event?.description}</p>
      <div className="flex items-center gap-3 ">
        <Link to='edit' className="p-2 text-white bg-sky-600 rounded font-semibold">
          <span>Edit event</span>
        </Link>
        <button className="p-2 text-white bg-red-600 rounded font-semibold" onClick={handleDeleteEvent}>
          Delete event
        </button>
      </div>
    </section>
  )
}

export default EventPage;

export async function loader({request, params}) {
  return params.eventId;
}


export async function action({params}){
  const eventId = params.eventId;
  console.log('Deleting... ' + eventId);
  return eventId;
}
