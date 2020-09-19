window.addEventListener('load', () => {


    let ocultar = document.getElementById('ocultar');
    let mostrar = document.getElementById('mostrar');
    let datos = document.getElementById('Imagenes');
    let insert = document.getElementById('insert');
    let group = document.querySelector('.btn-group');

    let usuario = [{
        img: 'kjhjkhh',
        nombre: 'Paul'
    }];

    // setInterval(() => {
    //     let button = document.createElement('button');
    //     group.append(button);
    //     button.innerHTML = 'Hola Mundo';
    //     button.classList.add('btn');
    //     button.classList.add('btn-primary');
    // }, 1000);

    setTimeout(() => {
        let button = document.createElement('button');
        group.append(button);
        button.innerHTML = 'Hola Mundo';
        button.classList.add('btn');
        button.classList.add('btn-primary');
    }, 3000);


    insert.addEventListener('click', () => {
        const url = 'https://usuarios-71872.firebaseio.com/Imagenes.json';
        fetch(url, {
                method: 'POST',
                data: JSON.stringify({ img: 'sfsfs', nombre: 'dsf' }),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(Response => Response.json())
            .then(data => {
                console.log(data);
            });


    });
    //json.parse()
    //json.strintifi
    localStorage.setItem('miqui');
    localStorage.removeItem('ff');
    localStorage.getItem();

    mostrar.addEventListener('click', () => {

        fetch('https://usuarios-71872.firebaseio.com/Imagenes.json')
            .then(Response => Response.json())
            .then(data => {
                datos.innerHTML = '';
                for (rows of data) {
                    datos.innerHTML += `
                 <div class="card">
                 <img src="${rows.img}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title">${rows.nombre}</h5>
                 </div>
                  </div>
                 `
                }
            });

    });



    ocultar.addEventListener('click', () => {
        datos.innerHTML = '';
    });








});