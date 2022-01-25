"use strict";
class Personne {
    _firstname;
    _lastname;
    _birthDate;
    get Firstname() {
        return this._firstname;
    }
    set Firstname(value) {
        this._firstname = value;
    }
    get Lastname() {
        return this._lastname;
    }
    set Lastname(value) {
        this._lastname = value;
    }
    constructor(fn, ln, bd = undefined) {
        this._firstname = fn;
        this._lastname = ln;
        this._birthDate = bd;
    }
    saluer() {
        console.log(`Bonjour je m'appelle ${this.Firstname} ${this.Lastname}.`);
    }
}
let user = new Personne('Sam', 'FaitRire', new Date(1987, 8, 27));
user.saluer();
