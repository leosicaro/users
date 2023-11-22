/*Sofía Pinilla 22:00
const postsDiv = document.querySelector(".posts");

const showPosts = (posts) => {
    posts.forEach((post) => {
        const { title, body } = post;
        postsDiv.innerHTML += `
       <p>Title: ${title}</p>
       <p>Body: ${body}</p>
       `;
    });
};

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        if (!res.ok) {
            throw new Error("Hubo un error cargando publicaciones");
        }
        return res.json();
    })
    .then((posts) => {
        showPosts(posts);
    })
    .catch(error => {
        postsDiv.innerHTML = "Hubo un error"
        console.error(error)
    })
Los mensajes dirigidos a "Chat de grupo de la reunión" también aparecerán en el chat de grupo de la reunión en Chat en equipo

Sofía Pinilla 22:01
const listUsers = document.getElementById("listaUsuarios");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        if (!res.ok) {
            throw new Error("Error cargando los usuarios");
        }
        return res.json();
    })
    .then((data) => {
        // const usersModified = [];
        // data.forEach((user) => {
        //     const newUser = {
        //         ...user,
        //         age: randomAge(),
        //         // ./assets/img/1.jpeg
        //         img: `./assets/img/${user.id}.jpeg`,
        //     };
        //     usersModified.push(newUser);
        // });
        const usersModified = data.map((user) => {
            return {
                ...user,
                age: randomAge(),
                img: `./assets/img/${user.id}.jpeg`,
            };
        });

        showUsers(usersModified);
    })
    .catch((error) => {
        console.error(error);
        listUsers.innerHTML = "Hubo error";
    });

function randomAge() {
    return Math.floor(Math.random() * 48) + 18;
}

function showUsers(users) {
    users.forEach((user) => {
        // name, age, username, img, phone, email, company, address
        const { name, age, username, img, phone, email, company, address } = user;
        const { name: companyName } = company;
        // usuario.address.street, usuario.address.suite, usuario.address.city
        const { street, suite, city } = address;
        const direction = [street, suite, city];

        listUsers.innerHTML += `
        <li>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Edad:</strong>${age}</p>
        <p><strong>Username:</strong>${username}</p>
        <img src="${img}" alt="${name}">
        <p><strong>Teléfono:</strong>${phone}</p>
        <p><strong>Correo:</strong>${email}</p>
        <p><strong>Compañia:</strong>${companyName}</p>
        <p><strong>Dirección:</strong>${street}, ${suite}, ${city}</p>
        <p><strong>Dirección:</strong>${direction}</p>
        </li>
        `;
    });
}*/