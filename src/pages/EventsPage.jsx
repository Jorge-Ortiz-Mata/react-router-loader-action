import { useLoaderData, json } from "react-router-dom";
import EventList from "../components/EventList";

const EventsPage = () => {
  const response = useLoaderData();
  console.log(response);

  return(
    <section className="flex flex-col w-full items-center justify-center py-10">
      <h2 className="font-bold text-3xl mb-10">My events.</h2>
      <EventList />
    </section>
  );
}

export default EventsPage;

export const getDummyData = () => {
  const person = { name: 'Jorge', country: 'México' };
  return person;
  // throw new Response(
  //   JSON.stringify({ message: 'Events failed' }),
  //   { status: 500 }
  // );
  // return json({message: 'Events failed - Bad request'}, {
  //   status: 500
  // });
}
