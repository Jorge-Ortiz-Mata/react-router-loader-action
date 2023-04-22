import DummyEvents from '../utilities/events-dummy';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: DummyEvents
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState: initialState,
  reducers: {
    addEvents(state, action){
      const event = action.payload.event;
      console.log(event);
    },
    removeEvents(state, action){
      const id = action.payload.id;
      console.log(id);
    }
  }
})


export const eventsActions = eventsSlice.actions;
