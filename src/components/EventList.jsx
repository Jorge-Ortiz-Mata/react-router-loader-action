import { useSelector } from "react-redux";
import EventCard from "./EventCard";

const EventList = () => {
  const events = useSelector(state => state.events.events);

  return(
    <div className="flex gap-10">
      {
        events.map(event => {
          return <EventCard key={event.id} event={event} />
        })
      }
    </div>
  )
}

export default EventList;
