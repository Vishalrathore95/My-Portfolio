var typed = new Typed('.text', {
    strings: ["Frontend Developer", "Backend Developer"," Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 1000,
    backDelay: 1000,
    loop: true
});




document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.contact-form form');

    form.addEventListener('submit', function (event) {
   
      event.preventDefault();

      const nameInput = document.querySelector('input[placeholder="Enter Your Name"]');
      const emailInput = document.querySelector('input[placeholder="Email"]');
      const subjectInput = document.querySelector('input[placeholder="Enter Your Subject"]');
      const messageInput = document.querySelector('textarea');

    
      if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return;
      }

    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        alert('Please enter a valid email.');
        return;
      }

  
      if (subjectInput.value.trim() === '') {
        alert('Please enter the subject.');
        return;
      }

      
      if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        return;
      }

     
      alert('Form submitted successfully!');
    });
  });


  document.getElementById('emailIcon').addEventListener('click', function() {
    var subject = 'Subject of the email';
    var body = 'Body of the email';

   
    var gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);


    window.open(gmailLink, '_blank');
});





