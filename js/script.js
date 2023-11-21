const listaDeUsuarios = document.getElementById("listaUsuarios")
let api = "https://jsonplaceholder.typicode.com/users "
let usuarios = document.getElementById("Usuarios")

fetch(api)
.then((Response)=>{
    if(!Response.ok){
        throw new console.error("mal del throw");
    }
    return Response.json()
})
.then((data)=>{console.log(data)
    let datos = data
datos.forEach(element => {
    let userArray = element
    
    let {id,name,email,username,phone,company,address,}=userArray
        let li = document.createElement("li");
        const edad = Math.floor(Math.random()*30+20)
        let imagenes = `assets/img/${id}.jpeg`
        li.innerHTML= `
        <fieldset>
        
        <fieldset>
        
        <img src="${imagenes}" width= 50px alt = "error">
        <p><b>nombre: </b>${name}</p>
        <p><b>edad: ${edad}</b></p>
        <p><b>usuario: </b>${username}</p>
        <p><b>telefono: </b>${phone}</p>
        <p><b>email: </b>${email}</p>
        </fieldset>
        <p><b>compania: </b>${company.name}</p>
        <p><b>direccion : </b>${address.street},${address.suite},${address.city$}</p>
        </fieldset>`
        listaDeUsuarios.appendChild(li)
    
        
    });
    })
  

