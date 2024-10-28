export class Person {    
    readonly _id: string;
    private _name: string;
    private _birthDay: Date;

    constructor(
        id: string,
        name: string,
        birthDay: Date
    ) {
        this._id = id;
        this._name = this.sanitizeName(name)
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
        this._name = this.sanitizeName(value)
    }

    /**
     * Setter birthDay
     * @param {Date} value
     */
    public set birthDay(value: Date) {
        this._birthDay = value;
    }

    private sanitizeName(name: string) {
        return name
                .replaceAll(/[^a-zA-Z\u00C0-\u00FF ]/ig, '')
                .toLocaleUpperCase();
    }
}

const person = new Person('1', 'mar13ia jos!456é da conc;.,e=-ição', new Date('10-06-1995'))
console.log(person)