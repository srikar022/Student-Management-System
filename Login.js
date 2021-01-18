const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "srikar" && password === "srikar") {
        alert("You have successfully logged in.");
        location.replace("Admin_Operations.html");
    } else
        alert("Invalid Username or Password");
   
})