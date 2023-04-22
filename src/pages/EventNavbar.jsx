import { NavLink } from "react-router-dom";

const EventNavbar = () => {

  return(
    <ul className="w-full flex items-center justify-center gap-5 my-10">
      <li>
        <NavLink
          to='new'
          className='underline font-semibold'
          end
        >
          New event
        </NavLink>
      </li>
    </ul>
  )
}

export default EventNavbar;
