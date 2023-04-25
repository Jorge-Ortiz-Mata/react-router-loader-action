import { NavLink } from "react-router-dom"
import NewsLetterForm from "../components/NewsLetterForm";

const Navbar = () => {

  return(
    <header className="flex items-center border p-4 w-full">
      <nav className="flex items-center justify-between w-full">
        <div>
          <h3 className="text-xl font-bold">Events App</h3>
        </div>
        <ul className="flex items-center gap-5">
          <li className="text-sm font-semibold">
            <NavLink
              to="/"
              className={({isActive}) => (
                isActive
                ? 'bg-orange-700 p-2 text-white rounded'
                : undefined
              )}
              end
            >
              Home
            </NavLink>
          </li>

          <li className="text-sm font-semibold">
            <NavLink
              to="events"
              className={({isActive}) => (
                isActive
                ? 'bg-orange-700 p-2 text-white rounded'
                : undefined
              )}
              end
            >
              My events
            </NavLink>
          </li>

          <li className="text-sm font-semibold">
            <NavLink
              to="newsletter"
              className={({isActive}) => (
                isActive
                ? 'bg-orange-700 p-2 text-white rounded'
                : undefined
              )}
              end
            >
              NewsLetter
            </NavLink>
          </li>
        </ul>

        <NewsLetterForm />
      </nav>
    </header>
  );
}

export default Navbar;
