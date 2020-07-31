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

/* Send email on post */
// document.querySelector(".contact-form").addEventListener("submit", sendEmail);

document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', sendEmail);
});

/* Send contact email with Azure function */
function sendEmail(event) {
    // var data = {
    //     toAddress: event.currentTarget[1].value,
    //     subject: event.currentTarget[0].value,
    //     messageBody: event.currentTarget[2].value
    // }

    var data = {
        toAddress: "ivanstamenic@gmail.com",
        subject: "Ivan Stamenic",
        messageBody: "Message from website"
    }

    fetch("https://a7-send-email.azurewebsites.net/api/SendEmailA7?code=TfZZcTJeH5oFdByV/bnJps2WDbdnmohhbe9Wfzy65yziGB3Qf4OJFA==", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

    event.preventDefault();
}
