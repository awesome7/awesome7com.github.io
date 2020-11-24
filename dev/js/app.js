// OPEN AND CLOSE SIDE NAV
function toggleNav() {
    $('#mySidenav').toggleClass("show");
    $('.navi-toggler').toggleClass("active");
    $('body').toggleClass('modal-open');
}

// SMOOTH SCROLL TO SECTION WHEN CLICK ON LINK
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
    request.open("POST", "https://a7-serverless.azurewebsites.net/api/SendEmail?code=pnh8e2PZlylfAhQ4QNQHSnFb58yeMfTZnXCuv5SasUsqT1g2njIJDA==");

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

// TEXTAREA AUTO RESIZE

var observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}
function textAreaAutoResize() {
    var text = document.getElementById('messageBody');
    function resize () {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight+'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize () {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change',  resize);
    observe(text, 'cut',     delayedResize);
    observe(text, 'paste',   delayedResize);
    observe(text, 'drop',    delayedResize);
    observe(text, 'keydown', delayedResize);

    resize();
}
// PRIVACY POLICY CHECKBOX

$(document).ready(function() {
  $('#policy').click(function() {
    //If the checkbox is checked.
    if ($(this).is(':checked')) {
      console.log("checked");
      //Enable the submit button.
      $('#sendMail').attr("disabled", false);
    } else {
      //If it is not checked, disable the button.
      $('#sendMail').attr("disabled", true);
    }
  });
});
