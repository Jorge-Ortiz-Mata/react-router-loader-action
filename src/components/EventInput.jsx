import { useDispatch } from "react-redux";
import { formActions } from "../store/form-slice";

const EventInput = ({name, label}) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;

    if(name === 'name'){
      dispatch(formActions.setName(value));
    }

    if(name === 'description'){
      dispatch(formActions.setDescription(value));
    }
  }

  return(
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        id={name}
        name={name}
        onChange={handleChange}
        className="text-sm border rounded p-2"
      />
    </div>
  )
}

export default EventInput;
