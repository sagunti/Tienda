fetch("./posts.json")
  .then((response) => {
    // console.log(response);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  })
  .then((posts) => {
    const section = document.querySelector("[data-item]");

    section.innerHTML = "";

    posts.forEach((post) => {
      const html = `
      
              <div class="item">
            
              <img class="imagenItem"id="${post.title}" src="assets/imagenes/reverso.png" alt="${post.title}">
              <h2 class="TituloItem">${post.title}</h2>
              <h3>${post.body}</h3>
              <p> € ${post.precio}</p>
              <button>Comprar</button>
              
          </div>
           
        `;

      section.innerHTML += html;
    });
  })
  .catch((error) => {
    console.log(error);
  });
