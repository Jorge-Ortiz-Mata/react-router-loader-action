const EventSubmit = ({label}) => {

  return(
    <input
      className="mt-5 rounded bg-sky-700 text-sm text-white font-semibold p-2"
      type="submit"
      value={label}
    />
  )
}

export default EventSubmit;
