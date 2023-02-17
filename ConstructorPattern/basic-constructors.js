
class Car {

    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    toString() {
        return `${this.model} has done ${this.miles} miles`;
    }
}

//Forma de uso.

//Podemos crear nuevas instancias del auto (car)
let civic = new Car('Honda Civic', 2009, 20000);
let mondeo = new Car('Ford Mondeo', 2010, 5000);

//Al instanciar y construir los objetos podemos realizar llamado de la propiedad creada (toString)
console.log( civic.toString());
console.log( mondeo.toString());