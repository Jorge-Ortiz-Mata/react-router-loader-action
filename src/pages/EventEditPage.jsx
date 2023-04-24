import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EventEditPage = () => {
  const eventId = useRouteLoaderData('event-id-detail');
  const events = useSelector(state => state.events.events);
  const [event, setEvent] = useState(undefined);

  useEffect(() => {
    const eventFiltered = events.filter(obj => obj.id === parseInt(eventId));
    setEvent(eventFiltered[0]);
  }, [eventId, events]);

  return(
    <section className="flex flex-col w-full items-center justify-center py-10">
      <h2 className="font-bold text-3xl mb-10">Edit event.</h2>
      <EventForm event={event} />
    </section>
  )
}

export default EventEditPage;
