/*Introduccion a las formas de creacion de objetos, acceso y definicion de sus propiedades */
//1er forma de creacion
const newObjectPrimerForma = {};

//2da forma
const newObjectSegundaForma = Object.create(Object.prototype);

//3er forma
const newObjectTercerForma = new Object();

//Hay 4 formas en las que las llaves y valores pueden ser asignados a un objeto

//1era -> Sintaxis Dot

//Asignacion de propiedades
newObjectPrimerForma.algunaLlave = 'Hola Mundo';

//Obtener valor de propiedades
const value = newObjectPrimerForma.algunaLlave;

//2da Forma Sintaxis de llave cuadrada 

//Asignacion de propiedades
newObjectSegundaForma['algunaLlave'] = 'Hola Mundo';

//Obtener valor de propiedades
const valorSegundaForma = newObjectSegundaForma['algunaLlave'];

//3era Forma definicion de propiedad de objeto (Object.defineProperty)
Object.defineProperty(newObjectTercerForma, 'algunaLlave', {
    value: 'Esta forma se utiliza para mejor control de la propiedad del objeto',
    writable: true,
    enumerable: true,
    configurable: true,
});

//Si la tercera forma se complica de leer puede ser escrita de la siguiente forma
const definePropiedades = (obj, key, value) => {
    const config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true,
    };

    Object.defineProperty(obj, key, config);
}

//Para usar crearemos un nuevo objeto vacio: persona
const person = Object.create(Object.prototype); 
definePropiedades(person, 'car', 'Dlorean');
definePropiedades(person, 'dateOfBirth', '1981');
definePropiedades(person, 'hasBeard', false);

console.log(person);

//4ta forma Object.definePropiedades
Object.defineProperties( newObjectPrimerForma, {
    algunaLlave: {
        value: 'Hola Mundo!',
        writable: true
    },
    otraLlave: {
        value: 'foo bar',
        writable: false
    },
});

//Formas de uso...
const driver = Object.create(person);
//Asignacion de propiedades
definePropiedades(driver, 'topSpeed', '100mph');
//Obtener propiedad
console.log( driver.dateOfBirthday);
//Obtener la propiedad que fue asignada
console.log( driver.topSpeed );