
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
