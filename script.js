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
    
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() { // Call a function when the state changes.
    //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //         alert("Message sent!");
    //     }
    // }

    // // xhr.addEventListener("load", reqListener);
    // // xhr.addEventListener("error", transferFailed);

    // xhr.open(
    //     "POST", 
    //     'a7-send-email.azurewebsites.net/api/SendEmailA7?code=5CBlq477JWnzW56XTkj0Adusc/08r6f/YCaRvp2W0ObEIq3aCYfQ2A==', 
    //     true);

    // //Send the proper header information along with the request
    // xhr.setRequestHeader("Content-Type", "application/json");
    
    let data = {
        toAddress: e.target["toAddress"].value,
        subject: e.target["subject"].value,
        messageBody: e.target["messageBody"].value
    };

    fetch("a7-send-email.azurewebsites.net/api/SendEmailA7?code=5CBlq477JWnzW56XTkj0Adusc/08r6f/YCaRvp2W0ObEIq3aCYfQ2A==", {
        method: "POST", 
        body: JSON.stringify(data)
      }).then(res => {
        console.log("Request complete! response:", res);
      });

    //xhr.send("toAddress");
});
