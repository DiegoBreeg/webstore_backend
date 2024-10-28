export class User {
    readonly _id: string;
    private _userName: string;
    private _lastLogin: Date | null;

    constructor(
        id: string,
        userName: string,
        lastLogin: Date | null
    ) {
        this._id = id;
        this._userName = userName;
        this._lastLogin = lastLogin;
    }


    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter userName
     * @return {string}
     */
    public get userName(): string {
        return this._userName;
    }

    /**
     * Getter lastLogin
     * @return {Date}
     */
    public get lastLogin(): Date | null {
        return this._lastLogin;
    }

    /**
     * Setter userName
     * @param {string} value
     */
    public set userName(value: string) {
        this._userName = value;
    }

    /**
     * Setter lastLogin
     * @param {Date } value
     */
    public set lastLogin(value: Date) {
        this._lastLogin = value;
    }
}



const user = new User('1', 'diegobreeg', new Date())

console.log(user)
