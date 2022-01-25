class Personne{

    private _firstname : string
    private _lastname : string
    private _birthDate? : Date | number | string

    public get Firstname() {
        return this._firstname;
    }

    public set Firstname(value){
        this._firstname = value;
    }

    public get Lastname() {
        return this._lastname;
    }

    private set Lastname(value){
        this._lastname = value;
    }
    
    constructor(fn : string, ln : string, bd: Date | number | string | undefined = undefined){
        this._firstname = fn;
        this._lastname = ln;
        this._birthDate = bd;
    }
    
    public saluer(){
        console.log(`Bonjour je m'appelle ${this.Firstname} ${this.Lastname}.`);
    }
}

let user = new Personne('Sam','FaitRire', new Date(1987,8,27));

user.saluer();

/** Utilisation des class et interfaces */


interface IProduct {
    name : string;
    weigth : string | number;
    from : string;
    price? : number;
    inStock? : boolean;
}

interface IMarketItem{
    market : string;
}

class Product implements IProduct, IMarketItem{
    name: string;
    weigth: string | number;
    from: string;
    price?: number | undefined;
    inStock?: boolean | undefined;
    market : string;

    constructor(name : string, weigth : string | number, from : string, market : string, price? : number, inStock? : boolean){
        this.name = name;
        this.weigth = weigth;
        this.from = from;
        this.market = market;
        this.price = price;
        this.inStock = inStock;
    }
}


let product : IProduct = {
    name : "Chocolat",
    weigth : "200g",
    from :"Belgium",
    price : 2.99,
    inStock : false
};

product = new Product("Banane","25g","Taihiti","Chez le bon fruit!");

let market_product : IMarketItem = new Product("Banane","25g","Taihiti","Chez le bon fruit!");

