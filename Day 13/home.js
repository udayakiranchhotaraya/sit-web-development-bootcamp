const token = localStorage.getItem('token');

if (token) {
    const username = localStorage.getItem('username');
    // console.log(token);
    document.getElementById("username").innerHTML = username;

    const logoutBtn = document.getElementById("logout");
    logoutBtn.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        // localStorage.clear;
        window.location.href = "login.html";
    });
} else {
    window.location.href = "login.html";
}