const signInForm = document.getElementById('sign-in-form');
signInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    fetch("http://localhost:3000/users", {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(username.value, password.value);
        const user = data.find((element) => 
            element.username === username.value && element.password === password.value
        );
        if (user) {
            alert("Login Success");
            window.location.href = "./all-blogs.html";
        } else {
            alert("Incorrect username-password. Try again.");
        }
        // console.log("User: ", user);
    })
    .catch(error => {console.error(error);})
})