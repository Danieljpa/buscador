 let inputbuscar = document.getElementById("inputbuscar");
 let btnbuscar =document.getElementById("btnbuscar");
 let url = "https://jsonplaceholder.typicode.com/posts";
 let tcompleta = document.querySelector(".tcompleta");

btnbuscar.onclick = function(e)
 {
  fetch(url)
    .then(response => response.json())
    .then(datos => mostrar(datos))
    .catch(error => console.log(error))
    contenido.innerHTML =  "";
    tcompleta.style.display = "block";
} 

function mostrar(datos)
{
    contenido.innerhtml= "";
    let ndatos = datos.filter(dato => dato.userId == inputbuscar.value);
    
        for( let valor of ndatos)
        {
            contenido.innerHTML +=  "<tr>"+"<td>"+valor.userId+"</td>"+"<td>"+valor.id+"</td>"+"<td>"+valor.title+"</td>"+"<td>"+valor.body+"</td>"+"</tr>";
        }
    inputbuscar.value = "";
}

let buttondark = document.querySelector("#buttondark");
const body = document.querySelector("body");
buttondark.addEventListener("click", function()
{
    body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode"))
    {
        localStorage.setItem("darkmode","true");
    }
    else 
        localStorage.setItem("darkmode","false");   
});

if(localStorage.getItem("darkmode") === "true")
{
    body.classList.add("darkmode");
}
else
    body.classList.remove("darkmode");