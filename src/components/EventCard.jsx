import { Link } from "react-router-dom";

const EventCard = ({event}) => {

  return(
    <div className="flex flex-col border rounded-lg shadow p-5 items-center gap-1">
      <span className="font-bold text-xl">{event.name}</span>
      <span className="text-sm font-medium">{event.description}</span>
      <span className="text-sm font-medium">id: {event.id}</span>
      <Link
        to={`${event.id}`}
        className="border rounded-lg text-sm font-semibold p-2 mt-5 bg-sky-700 text-white"
      >
        See more
      </Link>
    </div>
  )
}

export default EventCard;
