// get --> 
// post -->
// put  --> 
// patch -->
// delete -->
import {APIRequestContext,APIResponse} from '@playwright/test'

export class RequestHandler{

    constructor(private request: APIRequestContext){
        this.request = request
    }
    async get(endpoint:string,headers={}):Promise<APIResponse>{
        return  await this.request.get(endpoint,{headers});
    }

    async post(endpoint:string,headers={},payload:any):Promise<APIResponse>{
        return await this.request.post(endpoint,{
            data:payload,
            headers
        })
    }
    async put(endpoint:string,headers={},payload:any):Promise<APIResponse>{
        return await this.request.put(endpoint,{
            data:payload,
            headers
        })
    }
    async patch(endpoint:string,headers={},payload:any):Promise<APIResponse>{
        return await this.request.patch(endpoint,{
            data:payload,
            headers
        })
    }
    async delete(endpoint:string,headers={}):Promise<APIResponse>{
        return await this.request.delete(endpoint,{
            headers
        })
    }



}
