// Obtener los datos de la API
fetch("https://reqres.in/api/users?delay=3")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Mostrar los datos en una tabla
    let table = document.getElementById("tabla-de-datos");

    for (let i = 0; i < data.data.length; i++) {
      let row = table.insertRow();

      let idCell = row.insertCell();
      let nameCell = row.insertCell();
      let emailCell = row.insertCell();
      let avatarCell = row.insertCell();
      let avatarImg = document.createElement("img");

      idCell.innerHTML = data.data[i].id;
      nameCell.innerHTML = data.data[i].first_name + " " + data.data[i].last_name;
      emailCell.innerHTML = data.data[i].email;
      avatarImg.src = data.data[i].avatar;
      avatarImg.classList.add("round-img");
      avatarCell.appendChild(avatarImg);
    }
  });

// Almacenar datos del almacenamiento local
let storedData = JSON.parse(localStorage.getItem("data"));
if (storedData && storedData.expiration > Date.now()) {
  console.log(storedData.data);
} else {
 
  fetch("https://reqres.in/api/users?delay=3")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let expirationTime = Date.now() + 4000;
      localStorage.setItem("data", JSON.stringify({ data: data, expiration: expirationTime }));
    });
}