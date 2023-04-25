import { useFetcher } from "react-router-dom"
import EventInput from "./EventInput"
import EventSubmit from "./EventSubmit"

const NewsLetterForm = () => {
  const fetcher = useFetcher();
  const response = fetcher;

  console.log('===========START================');
  console.log('Fetcher response:');
  console.log(response.state === 'loading');

  return(
    <fetcher.Form method="post" action="/newsletter">
      <EventInput name='email' label='Email' />
      <EventSubmit />
    </fetcher.Form>
  )
}

export default NewsLetterForm;

export const action = async ({request, params}) => {
  const data = await request.formData();
  console.log(data.get('email'));
  return data.get('email');
}
