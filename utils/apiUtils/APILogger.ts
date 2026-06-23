import {APIResponse} from '@playwright/test'

export class APILogger {


    static logRequest(method:string,endpoint:string,payload?:unknown,headers?:Record<string,string>):void{
        console.log(`Method : ${method}`)
        console.log(`Endpoint : ${endpoint}`)   
        if(headers){
            console.log('Headers:',JSON.stringify(headers))
        }
        if(payload){
            console.log('Payload:',JSON.stringify(payload))
        }

    }

    static async logResponse(reponse:APIResponse){
        console.log('Status',reponse.status())
        console.log('URL',reponse.status())
        console.log('Status',reponse.url())
        console.log('body',await reponse.text())
        
    }






}
