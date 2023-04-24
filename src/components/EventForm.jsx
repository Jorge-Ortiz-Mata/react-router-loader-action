import { useSelector, useDispatch } from "react-redux";
import EventInput from "./EventInput";
import EventSubmit from "./EventSubmit";
import { eventsActions } from "../store/events-slice";
import { Form, useNavigate } from "react-router-dom";

const EventForm = ({event}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector(state => state.events.events);
  const newEvent = useSelector(state => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(eventsActions.addEvents({...newEvent, id: (events.length + 1)}));
    // navigate('/events');
  }

  return(
    <Form
      method="post"
      // onSubmit={handleSubmit}
      className="flex flex-col gap-2 items-center border shadow p-5 rounded-xl"
    >
      <EventInput name='name' label='Name' defaultValue={event?.name} />
      <EventInput name='description' label='Description' defaultValue={event?.description} />
      <EventSubmit label='Create event' />
    </Form>
  )
}

export default EventForm;
