//Script to get information from contact form

function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_7242hgg","template_ywvda0c", params).then(function (res) {
        alert("Thanks for contacting me! Message sent! " + res.status);
    }) 
}