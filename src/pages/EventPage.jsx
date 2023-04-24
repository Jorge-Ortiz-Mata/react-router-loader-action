import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useRouteLoaderData } from "react-router-dom";

const EventPage = () => {
  const events = useSelector(state => state.events.events);
  const [event, setEvent] = useState(undefined);
  const eventId = useRouteLoaderData('event-id-detail');

  useEffect(() => {
    const eventFiltered = events.filter(obj => obj.id === parseInt(eventId));
    setEvent(eventFiltered[0]);
  }, [eventId, events]);

  return(
    <section className="flex flex-col items-center m-10 border rounded shadow p-5 gap-3">
      <p className="font-semibold mb-5">Event Details.</p>
      <h2 className="font-bold text-3xl">{event?.name}</h2>
      <p className="font-semibold">{event?.description}</p>
      <Link to='edit'>
        <span>Edit event</span>
      </Link>
    </section>
  )
}

export default EventPage;

export async function loader({request, params}) {
  return params.eventId;
}
