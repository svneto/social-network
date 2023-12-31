function logout() {
    fetch('/exit', { method: 'GET' })
    .then(response => {

        if (response.ok) {
            window.location.href = response.url;
        } else {
            throw new Error('Error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
function post(){
    window.location.replace("http://www.localhost:8080/post")
}
function search() {
    window.location.replace("http://www.localhost:8080/search")
}
function home() {
    window.location.replace("http://www.localhost:8080/home")
}


document.addEventListener("DOMContentLoaded", function() {
    var card = document.querySelector(".card");
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");
    var showRegisterBtn = document.getElementById("showRegisterBtn");
    var showLoginBtn = document.getElementById("showLoginBtn");


    // loginBtn.addEventListener("click", function() {
    //     Swal.fire({
    //         title: "Login Successful",
    //         // text: "Entering...",
    //         icon: "success"
    //       });
    // });
    //
    // registerBtn.addEventListener("click", function() {
    //     alert("Account created successfully"); //other option
    // });

    showRegisterBtn.addEventListener("click", function() {
        card.classList.add("flip");

        document.getElementById("front").classList.add("disable-mouse-events")
        document.getElementById("back").classList.remove("disable-mouse-events")
    });

    showLoginBtn.addEventListener("click", function() {
        card.classList.remove("flip");

        document.getElementById("front").classList.remove("disable-mouse-events")
        document.getElementById("back").classList.add("disable-mouse-events")
    });     
});