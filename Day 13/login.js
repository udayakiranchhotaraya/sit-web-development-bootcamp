const url = "http://localhost:3000/users";
const loginForm = document.getElementById("login-container");

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameEntered = document.getElementById("username").value;
    const passwordEntered = document.getElementById("password").value;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        verifyCredentials(data, usernameEntered, passwordEntered);
    })

    // if ((usernameEntered === "admin") && (passwordEntered === "password")) {
    //     const token = Date.now();
    //     localStorage.setItem('token', token);
    //     localStorage.setItem('username', username);
    //     window.location.href = "home.html";
    // } else {
    //     console.error("Invalid username-password");
    // }
})

function verifyCredentials(data, username, password) {
    // console.log(data);
    data.forEach(element => {
        if ((element.username === username) && (element.password === password)) {
            // console.log("Login Success");
            const token = Date.now();
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            window.location.href = "home.html";
        }
        else {
            console.error("Invalid username-password");
        }
    });

//     data.find(element => {
//         if ((element.username === username) && (element.password === password)) {
//             // console.log("Login Success");
//             const token = Date.now();
//             localStorage.setItem('token', token);
//             localStorage.setItem('username', username);
//             window.location.href = "home.html";
//         }
//         else {
//             console.error("Invalid username-password");
//         }
//     })

}