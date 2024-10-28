
export class Person {
    private _id: string;
    private _name: string;
    private _birthDay: Date;

    constructor(
        id: string,
        name: string,
        birthDay: Date
    ) {
        this._id = id;
        this._name = name
            .replaceAll(/[^a-zA-Z\u00C0-\u00FF ]/ig, '')
            .toLocaleUpperCase();
        this._birthDay = birthDay;
    }

    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter birthDay
     * @return {Date}
     */
    public get birthDay(): Date {
        return this._birthDay;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value
            .replaceAll(/[^a-zA-Z\u00C0-\u00FF ]/ig, '')
            .toLocaleUpperCase();
    }

    /**
     * Setter birthDay
     * @param {Date} value
     */
    public set birthDay(value: Date) {
        this._birthDay = value;
    }
}

const person = new Person('1', 'diego', new Date('10-06-1995'))
console.log(person.name)
person.name = 'maria josé da conceição'
console.log(person)