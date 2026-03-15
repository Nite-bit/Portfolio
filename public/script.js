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
.addEventListener("submit", async function(e){

    e.preventDefault();

    const form = this;

    const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    };

    try{

        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if(result.success){

            alert("Message sent successfully!");

            // Clear form
            form.reset();

            // Optional page reload
            // location.reload();

        }else{
            alert("Failed to send message");
        }

    }catch(error){

        console.error(error);
        alert("Server error. Please try again.");

    }

});