const EventCard = ({event}) => {

  return(
    <div className="flex flex-col border rounded-lg shadow p-5">
      <span className="font-bold text-xl">{event.name}</span>
      <span className="text-sm font-medium">Description: {event.description}</span>
      <span className="text-sm font-medium">id: {event.id}</span>
    </div>
  )
}

export default EventCard;
