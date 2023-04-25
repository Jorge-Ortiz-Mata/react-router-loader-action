import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import EventList from "../components/EventList";

const EventsPage = () => {
  const data = useLoaderData();
  console.log(data);

  // return(
  //   <section className="flex flex-col w-full items-center justify-center py-10">
  //     <h2 className="font-bold text-3xl mb-10">My events.</h2>
  //     <EventList />
  //   </section>
  // );

  return(
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={data.people}>
        {(peopleLoaded) => {
          <section className="flex flex-col w-full items-center justify-center py-10">
            { peopleLoaded /*  Do your map or something like that  */ }
            <h2 className="font-bold text-3xl mb-10">My events.</h2>
            <EventList />
          </section>
        }}
      </Await>
    </Suspense>
  )
}

export default EventsPage;

async function loadData() {
  // Here goes the HTTP request....
}

export const getDummyData = () => {
  defer({
    people: loadData()
  })
}
