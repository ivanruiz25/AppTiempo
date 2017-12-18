
//clase tiempo para guardar los datos en un objeto
class Tiempo{

  constructor(id,fecha,estado,min,max,humedad,viento,presion,icono)
  {
    this.id=id;
    this.fecha=fecha;
    this.estado=estado;
    this.min=min;
    this.max=max;
    this.humedad=humedad;
    this.viento=viento;
    this.presion=presion;
    this.icono=icono;
  }
  toString()
  {
    return this.fecha.toDateString()+" - "+this.estado+" > "+this.max+" / "+this.min+"</br>";
  }

};
//final de las clases
//comienzo de la funciones


// url que contiene la api del tiempo
var urlTiempo =
  "http://api.openweathermap.org/data/2.5/forecast?id=3130583&lang=es&units=metric&APPID=803632d6d2f0ebf856ad977cbb6614e0";

//funcion para recuperar los datos del json 
var getJSON = function(url) {

  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

//array global donde guardaremos los objetos
  var dias=[];

// funcion para sacar datos desde el json en un array de objetos tiempo
  getJSON(urlTiempo).then(function(data) {

    
    for(let i=0; i< data.list.length; i=i+8)   {

      var date=new Date(data.list[i].dt*1000);
      console.log(i);
      console.log(date);

  // vamos metiendo los datos del json en un array como un objeto tiempo
    dias.push(new Tiempo(i,date,data.list[i].weather[0]['main'] , data.list[i].main['temp_min'], data.list[i].main['temp_max'],data.list[i].main['humidity'],data.list[i].wind['speed'],data.list[i].main['pressure'],data.list[i].weather[0]['icon']));
    
    }
   
}, function(status) {
  alert('Algo fue mal.');
});


//funcion que devolvera un objeto que tengo el mismo id que se pasa por parametro
function encontrarObjeto(id)
{
  var objeto="";

  for(let i=0;i<dias.length;i++)
  {
    if(id==dias[i].id)
    {
       objeto=dias[i];
    }
  }

  return objeto;
}
//funcion que devolvera el dia de la semana buscando en un array la posicion pasada por parametro
function mostrarDiaSemana(diaSemana) {

var array=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

return  (diaSemana >= 0 && diaSemana <= 6) ? array[diaSemana] : "";

}

// funcion para mostrar el dia en el que hemos pinchado 
function mostrarDia(id)
{
 
 // cambiamos la clase la tabla donde se encuentran todos los datos de la semana para ocultarla
  document.getElementById("semana").className="oculta";
  var dia=document.getElementById("dia");
  // le asignamos la clase para asignarle estilos
  dia.className="dia";
  // variable donde vamos a ir guardando los datos a motrar
  var contenidoDia;
  // buscamos el objeto por su id
  var objeto=encontrarObjeto(id);
  // asignamos un dia de la semana dependiendo de un numero
  var diaSemana=mostrarDiaSemana(objeto.fecha.getDay());

  contenidoDia="<table class=\"tablaDia\">";
  contenidoDia+="<tr><th><a class=\"encabezado\" href=\"javascript:mostrarOcultar();\" >Forecast</a></th></tr>";
  contenidoDia+="<tr><th class=\"ciudad\" >Alcobendas</th></tr>";
  contenidoDia+="</table>";
  contenidoDia+="<img src=\"https://openweathermap.org/img/w/"+objeto.icono+".png\" />";
  contenidoDia+="<h2>"+diaSemana+" "+objeto.fecha.getDate()+"/"+(objeto.fecha.getMonth()+1)+"</h2>";
  contenidoDia+="<h3 class=\"max\" >"+objeto.max+"º </h3>";
  contenidoDia+="<h3>"+objeto.min+"º </h3>";
  contenidoDia+="<h4> Humedad: "+objeto.humedad+"% </h4>";
  contenidoDia+="<h4> Viento: "+objeto.viento+" Km/h NW </h4>";
  contenidoDia+="<h4> Presion: "+objeto.presion+" Hpa </h4>";

  
 
 //mandamos los datos para que se impriman en la etiqueta con el id "dia"
 dia.innerHTML=contenidoDia;
}

// funcion para mostrar una tabla con los datos de toda semana recorriendo el array de objetos
function mostrarSemana()
{
  
  var tabla=document.getElementById("semana");
  // asignamos la clase para mostrar la tabla con estilos
  tabla.className="tablaInicial";
  //variable donde guardaremos todos los datos
  var contenido;

    contenido='<tr><th>Forecast</th></tr>';
    contenido+="<tr><th class=\"ciudad\" >Alcobendas</th></tr>";

  // recorremos el array donde se encuentran nuestros objetos
  for(let i=0;i<dias.length;i++)
  {
    console.log(dias[i]);
      contenido+="<tr>";
      contenido+="<td><a  id=\""+i+"\" href=\"javascript:mostrarDia("+dias[i].id+");\" >"+dias[i].toString()+"</a></td>";
      contenido+="</tr>";
  }
  // introducimos los datos en la etiqueta con id semana para imprimirlos
  tabla.innerHTML=contenido;
}
// funcion para ocultar los datos de un dia y volver a mostrar la tabla donde se encuentra la semana 
function mostrarOcultar()
{
  
  var dia=document.getElementById("dia");
  var semana=document.getElementById("semana");

  // ocultamos el div donde se encuentran los datos del dia
  dia.className="oculta";
  // dejamos el div vacio 
  dia.innerHTML="";
  // volvemos a asignar estilos a la tabla donde se encuentran los datos de la semana para volver a mostrarla
  semana.className="tablaInicial";
    
}