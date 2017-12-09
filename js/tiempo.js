
//clase tiempo para guardar los datos en un objeto
class Tiempo{

  constructor(id,fecha,estado,min,max)
  {
    this.id=id;
    this.fecha=fecha;
    this.estado=estado;
    this.min=min;
    this.max=max;
    
  }
  get Id()
  {
    return this.id;
  }
  get Fecha()
  {
    return this.fecha;
  }
  get Estado()
  {
    return this.estado;
  }
  get Min()
  {
    return this.min;
  }
  get Max()
  {
    return this.max;
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
  //visibility: hidden

// funcion para sacar datos desde el json
  getJSON(urlTiempo).then(function(data) {

    
    for(let i=0; i< 8; i++)   {

        var date=new Date(data.list[i].dt*1000);

        // vamos metiendo los datos del json en un array como un objeto tiempo
        dias.push(new Tiempo(i,date,data.list[i].weather[0]['main'] , data.list[i].main['temp_min'], data.list[i].main['temp_max']));
        //motramos los datos del objeto guardado en el array con un id que va ser posicion en la que se encuentra el objeto en el array
        //en onclick guardamos la funcion que se activara cuando pulsemos el enlace 
        
    }
   
 
  }, function(status) {
  alert('Algo fue mal.');
});

//comprobar el array en la consola del navegador
  console.log(dias);
//funcion para buscar el objeto a mostrar

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

function mostrarDiaSemana(diaSemana) {

var array=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

return array[diaSemana];

}

function mostrarDia(id)
{
  document.getElementById("tabla").style.display = 'none';
  var objeto=encontrarObjeto(id);
  var diaSemana=mostrarDiaSemana(objeto.fecha.getDay());

  document.write("<div id=\"dia\" >");
  document.write("<h1><a href=\"javascript:mostrarOcultar();\" >Tu tiempo</a></h1>");
  document.write("<h2>"+diaSemana+"</h2>");
  document.write("<h2>"+objeto.fecha.getDate()+"/"+(objeto.fecha.getMonth()+1));
  document.write("<h3> max: "+objeto.max+"º</h3>");
  document.write("<h3> min: "+objeto.min+"º</h3>");
  document.write("<h4>"+objeto.estado+"</h4>");
  document.write("</div>");
}

function mostrarSemana()
{

  document.write("<table id=\"tabla\">");
  document.write("<tr><th>Tu tiempo</th></tr>");
  document.write("<tr><th>Alcobendas</th></tr>");

  for(let i=0;i<dias.length;i++)
  {
      document.write("<tr>");
      document.write("<td><a  id=\""+i+"\" href=\"javascript:mostrarDia("+i+");\" >"+dias[i].toString()+"</a></td>");
      document.write("</tr>");
  }
  document.write("</table>");

}
function mostrarOcultar()
{
  var dia=document.getElementById("dia");
  dia.parentNode.removeChild(dia);
  document.getElementById("tabla").style.display = 'block';
}