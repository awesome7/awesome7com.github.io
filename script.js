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

document.querySelector("#contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    let data = {
        toAddress: e.target["toAddress"].value,
        subject: e.target["subject"].value,
        messageBody: e.target["messageBody"].value
    };

    fetch("https://a7-send-email.azurewebsites.net/api/SendEmailA7?code=TfZZcTJeH5oFdByV/bnJps2WDbdnmohhbe9Wfzy65yziGB3Qf4OJFA==", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'include', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        //redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then(res => {
        console.log("Request complete! response:", res);
      }).catch(e =>  {
          console.log(e);
          return e;
      });
});
