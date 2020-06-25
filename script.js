/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("menu-icon").style.display = "none";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu-icon").style.display = "inherit";
}

function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

/* */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.page').forEach(page => {
    page.addEventListener('click', function (e) {
        closeNav();
    });
});

function onSubmit(token) {
    var data = {
        subject: document.getElementById("name"),
        toAddress: document.getElementById("email"),
        messageBody: document.getElementById("message"),
    };

    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "a7-send-email.azurewebsites.net/api/SendEmailA7?code=5CBlq477JWnzW56XTkj0Adusc/08r6f/YCaRvp2W0ObEIq3aCYfQ2A==");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
}