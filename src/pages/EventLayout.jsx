import { Outlet } from "react-router-dom";
import EventNavbar from "./EventNavbar";

const EventLayout = () => {

  return(
    <>
      <EventNavbar />
      <Outlet />
    </>
  )
}

export default EventLayout;
