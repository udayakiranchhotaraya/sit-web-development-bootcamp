const url = "http://localhost:3000/user";
// fetch(url, {
//     method: "GET"
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     displayData(data);
// })
// .catch(error => {
//     console.log(error);
// })

// function displayData(data) {
//     const container = document.getElementById("container");
//     data.forEach(element => {
//         const item = document.createElement('p');
//         item.textContent = `ID: ${element.id}; Name: ${element.name.firstname}; Email: ${element.email};`;
//         container.appendChild(item);
//     });
// }

// POST
// function addUser() {
    const newUser = {
        name: {
            firstName: "Jack",
            lastName: "Doe"
        },
        email: "jack@mail.com"
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log("New user created: ", data);
    })
    .catch(error => {
        console.log(error);
    })
// }