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
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            alert("Message sent!");
        }
    }
    xhr.open(
        "POST", 
        'a7-send-email.azurewebsites.net/api/SendEmailA7?code=5CBlq477JWnzW56XTkj0Adusc/08r6f/YCaRvp2W0ObEIq3aCYfQ2A==', 
        true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify({
        toAddress: document.getElementById("toAddress"),
        subject: document.getElementById("subject"),
        messageBody: document.getElementById("messageBody")
    }));

    return false;
}