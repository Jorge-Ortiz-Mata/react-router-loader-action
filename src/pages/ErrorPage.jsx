import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return(
    <>
      <h1 className="text-center font-bold text-2xl">An error ocurred.</h1>
      <p className="text-center font-semibold">{JSON.parse(error.data).message}</p>
    </>
  )
}

export default ErrorPage;
