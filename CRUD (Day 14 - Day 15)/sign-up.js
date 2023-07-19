const signUpForm = document.getElementById('sign-up-form');
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    const newUser = {
        username : username,
        name : name,
        password : password
    }

    fetch("http://localhost:3000/users", {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        // console.log(username);
        const isUsernameTaken = data.find((element) => 
            element.username === username
        );
        if (isUsernameTaken) {
            // const doesUserExist = data.find((element) =>
            //     element.name === name
            // );
            // if (doesUserExist) {
            //     alert("User already exist!!");
            // } else {
                alert("Username already taken. Please try something different.");
            // }
        } else {
            addNewUser(newUser);
        }
    })
    
})

function addNewUser(newUser) {
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log("New User Created", newUser);
    })
    .catch(error=> console.error(error));
}