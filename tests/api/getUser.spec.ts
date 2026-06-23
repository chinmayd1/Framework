import {test} from '@playwright/test'
import {RequestHandler} from '../../utils/apiUtils/RequestHandler'
let  api;
import {APILogger} from '../../utils/apiUtils/APILogger'
import {ReponseValidator} from '../../utils/apiUtils/ReponseValidator'

test('Get users',async({request})=>{
   api = new RequestHandler(request)
   let response = await api.get('apiurl')
   await APILogger.logResponse(response)
   await ResponseValidator.
})
