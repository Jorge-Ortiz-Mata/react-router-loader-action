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
      const event = action.payload;
      state.events.push(event);
    }
  }
})


export const eventsActions = eventsSlice.actions;
