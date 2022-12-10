import axios from 'axios';
import { Listing } from '~~/interfaces/listing';
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const result = await axios.get(`https://retsapi.raprets.com/LUBB/RESO/OData/Property?%24expand=PropertyPictures+&%24top=${body.count}+&%24skip=${body.skip}&Class=Residential&%24filter=ListAgentMlsId+eq+%27812022600%27+and+MlsStatus+eq+%27Active%27`,
    {
      headers: { Authorization: `Bearer ${event.context.auth.token}` }
    }
  );
  return {
    data: result.data.value as Listing[] ?? []
  };
});
