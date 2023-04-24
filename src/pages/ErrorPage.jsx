import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let message;

  if(error.status === 500){
    message = error.data.message;
  }

  if(error.status === 404){
    message = error.data;
  }

  return(
    <>
      <h1 className="text-center font-bold text-2xl">An error ocurred.</h1>
      <p className="text-center font-semibold">{message}</p>
    </>
  )
}

export default ErrorPage;
