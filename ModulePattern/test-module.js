//******* */
//Module Pattern
//******* */

let counter = 0;

const testModule = {
    incrementCounter() {
        return counter++;
    },
    resetCounter() {
        console.log(`counter value prior to reset: ${counter}`);
        counter = 0;
    },
};

//Forma #1 ES2015+
//export default testModule;
//Forma #2 (NodeJS)
module.exports = testModule; //exportando solo funcion 
//Forma #3  exportando multiples funciones
//module.exports = {
//    testModule
//}

//Forma de implementacion #1 ES2015+
//import testModule from './test-module';
//Forma de implementacion #2 (node)
const testModuleImpo = require('./test-module');

//incrementando el contador
testModuleImpo.incrementCounter();

//Revision de valor del contador y reinicio
testModuleImpo.resetCounter();
