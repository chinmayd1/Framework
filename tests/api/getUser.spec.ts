import {test} from '@playwright/test'
import {RequestHandler} from '../../utils/apiUtils/RequestHandler'


test('Get users',async({request})=>{
   const api = new RequestHandler(request)
   let reponse = await api.get('apiurl')


})