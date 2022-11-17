import axios from 'axios'
export default defineEventHandler(async (event) => {
    const result = await axios.get('https://retsapi.raprets.com/LUBB/RESO/OData/Property?%24expand=PropertyPictures+&%24filter=ListAgentMlsId+eq+%27812022600%27&Class=CommercialSale',
    {
      headers: { Authorization: `Bearer ${event.context.auth.token}` }
    }
  )
    return {
      data: result.data.value ?? []
    }
  })
