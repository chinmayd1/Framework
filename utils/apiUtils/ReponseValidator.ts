import {expect} from '@playwright/test'

export class ReponseValidator {

    static validateStatus(actual:number,expected:number):void{
        expect(actual).toBe(expected)
    }


    // {
    //     claim:234,
    //     claimref:"5435"
    // }

    static validateProperty(responseBody:any,properName:string):void{
        expect(responseBody).toHaveProperty(properName)
    }




}