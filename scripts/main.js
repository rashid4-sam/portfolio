function sendMail() {

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    const serviceID = 'service_rt7393e';
    const templateID = 'template_majqxz8';

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("subject").value = '';
            document.getElementById("message").value = '';
            console.log(res);
            alert('Message sent successfully');
        })
        .catch((err) => {
            console.log('Failed to send email:', err);
            alert('Failed to send message. Please try again.');
        });
}
