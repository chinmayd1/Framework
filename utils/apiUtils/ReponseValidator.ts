import {expect} from '@playwright/test'

export class ReponseValidator {


    static validateStatus(actualStatus:number,expectedStatus:number):void{
        expect(actualStatus).toEqual(expectedStatus)
    }

    static validateProperty(responseBody:any,propertyName:string):void{
        expect(responseBody).toHaveProperty(propertyName)
    }

    static validateValue(actualValue:any,expectedValue:any){
        expect(actualValue).toBe(expectedValue)
    }

    static validateContains(actualText:string,expectedText:string){
        expect(actualText).toContain(expectedText)
    }

    static validateNotNull(value:any):void{
        expect(value).not.toBeNull
    }

    static validateArraySize(array:any[],expectedSize:number):void{
        expect(array.length).toBe(expectedSize)
    }

     static validatePerson(array:any[],expectedName:string):void{
        //expect(array.length).toBe(expectedSize)
        let obj = array.filter(function(el){
            return el.firstName = expectedName
        })
        expect(obj).not.toBeUndefined
        // validate complete object
    }


}

// API ===> call values ====> API salesforces call ===> values ====> 

