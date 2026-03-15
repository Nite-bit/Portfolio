// Typed text animation
var typed = new Typed(".text", {
    strings: ["Python Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// Contact form submission
document.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_wgzqvsf",     // your service id
"template_e3ku3ch",      // your template id
this
).then(function(){

alert("Message sent successfully!");

document.getElementById("contact-form").reset();

}, function(error){

alert("Failed to send message");

});

});

// "service_wgzqvsf",
// "template_e3ku3ch",