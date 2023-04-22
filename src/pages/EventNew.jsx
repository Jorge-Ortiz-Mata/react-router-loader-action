import EventForm from "../components/EventForm";

const EventNew = () => {

  return(
    <section className="flex flex-col w-full items-center justify-center py-10">
      <h2 className="font-bold text-3xl mb-10">New Event.</h2>
      <EventForm />
    </section>
  )
}

export default EventNew;
