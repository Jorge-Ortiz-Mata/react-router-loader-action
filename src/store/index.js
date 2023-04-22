import { configureStore } from "@reduxjs/toolkit";
import { eventsSlice } from "./events-slice";
import { formSlice } from "./form-slice";

export const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
    form: formSlice.reducer
  }
});
