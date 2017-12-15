
var expect = chai.expect;
chai.should();

describe("Probando la funcion mostrarDiaSemana ", function () {
    it("Deberia mostrar Domingo", function () {
        mostrarDiaSemana(0).should.be.equal("Domingo");
    });
    it("Deberia mostrar Lunes", function () {
        mostrarDiaSemana(1).should.be.equal("Lunes");
    });
    it("Deberia mostrar Martes", function () {
        mostrarDiaSemana(2).should.be.equal("Martes");
    });
    it("Deberia mostrar Miercoles", function () {
        mostrarDiaSemana(3).should.be.equal("Miercoles");
    });
    it("Deberia mostrar Jueves", function () {
        mostrarDiaSemana(4).should.be.equal("Jueves");
    });
    it("Deberia mostrar Viernes", function () {
        mostrarDiaSemana(5).should.be.equal("Viernes");
    });
    it("Deberia mostrar Sabado", function () {
        mostrarDiaSemana(6).should.be.equal("Sabado");
    });
    it("Deberia mostrar vacio, le pasamos una variable que no es un numero", function () {
        mostrarDiaSemana("hola").should.be.equal("");
    });
    it("Deberia mostrar vacio,le pasamos un numero positivo que no existe en el array", function () {
        mostrarDiaSemana(8).should.be.equal("");
    });
    it("Deberia mostrar vacio,le pasamos un numero negativo que no existe en el array", function () {
        mostrarDiaSemana(-1).should.be.equal("");
    });
});
// no consigo hacer casos de prueba con objetos
describe("Probando la funcion encontrarObjeto ", function () {
    var tiempo = new Tiempo(0,"Fri Dec 15 2017 19:00:00 GMT+0100 (Hora estándar romance)","Rain",3,5.27);
     it("Deberia mostrar el objeto que se encuentra en la posicion 0", function () {
        encontrarObjeto(tiempo.id).id.should.be.equal(0);
    });
      it("Deberia mostrar el objeto que se encuentra en la posicion 1", function () {
        encontrarObjeto(8).should.be.equal(8);
    });
       it("Deberia mostrar el objeto que se encuentra en la posicion 2", function () {
        encontrarObjeto(16).should.be.equal(16);
    });
        it("Deberia mostrar el objeto que se encuentra en la posicion 3", function () {
        encontrarObjeto(24).should.be.equal(24);
    });
         it("Deberia mostrar el objeto que se encuentra en la posicion 4", function () {
        encontrarObjeto(32).should.be.equal(32);
    });
          it("comprobando una posicion que no se encuentra en el array", function () {
        encontrarObjeto(5).should.be.equal("");
    });
           it("comprobando una posicion que no se encuentra en el array", function () {
        encontrarObjeto(6).should.be.equal("");
    });
            it("comprobando una posicion que no se encuentra en el array", function () {
        encontrarObjeto(8).should.be.equal("");
    });
            it("comprobando con una variable que no es un numero", function () {
        encontrarObjeto("hola").should.be.equal("");
    });


});
