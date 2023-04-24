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

export const action = async ({request, params}) => {
  const data = await request.formData();
  const eventData = {
    title: data.get('name'),
    description: data.get('description'),
  }

  // if(response.status === 422){
    return {errors: ['One Error', 'Two Errors'], status: 400}
  // }

  // console.log(eventData);
  // return eventData;
}
