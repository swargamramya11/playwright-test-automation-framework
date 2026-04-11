import faker from 'faker';

export class ReusableMethods {

    static getProperty(property:string):string {
        return process.env[property] as string
    }
}