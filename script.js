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
document.querySelector(".contact-form").addEventListener("submit", sendEmail);

/* Send contact email with Azure function */
function sendEmail(event) {
    let formElement = document.querySelector(".contact-form");
    let formData = new FormData(formElement);
    let request = new XMLHttpRequest();
    request.addEventListener("load", transferComplete);
    request.addEventListener("error", transferFailed);
    request.addEventListener("abort", transferCanceled);
    request.open("POST", "https://a7-send-email.azurewebsites.net/api/SendEmailA7?code=TfZZcTJeH5oFdByV/bnJps2WDbdnmohhbe9Wfzy65yziGB3Qf4OJFA==");
    
    if(formData.get("policy") !== null && formData.get("policy") === "on"){
        request.send(formData);
    }
    else
    {
        writeMessage("You must agree with the Privacy Policy", "failed")
    }

    event.preventDefault();
}

function transferComplete(evt) {
    writeMessage("Email successfully sent.", "success");
}

function transferFailed(evt) {
    writeMessage("An error occurred while sending an e-mail.", "failed");
}

function transferCanceled(evt) {
    writeMessage("The action has been canceled by the user.", "failed");
}

function writeMessage(message, status) {
    let msg = document.getElementById("email-message");
    msg.setAttribute("class", status)
    msg.innerHTML = message;
}