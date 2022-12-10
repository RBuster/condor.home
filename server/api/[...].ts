import axios from 'axios';
import { createRouter, defineEventHandler } from 'h3';
import { Listing } from '~~/interfaces/listing';

const router = createRouter();

router.post('/residential', defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = `https://retsapi.raprets.com/LUBB/RESO/OData/Property?%24expand=PropertyPictures+&%24top=${body.count}+&%24skip=${body.skip}\
  &Class=Residential\
  &$filter=MlsStatus%20eq%20%27Active%27 ${body.realtorID ? '%20and%20ListAgentMlsId%20eq%20%27812022600%27' : ''}`;
  const result = await axios.get(url,
    {
      headers: { Authorization: `Bearer ${event.context.auth.token}` }
    }
  );
  return {
    data: result.data.value as Listing[] ?? []
  };
}));

export default useBase('/api', router.handler);
