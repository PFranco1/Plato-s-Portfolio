const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');


navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
  
    if (visibility === 'false') {
      primaryNav.setAttribute('data-visible', 'true');
      navToggle.setAttribute('aria-expanded', 'true');
    } else if (visibility === 'true') {
      primaryNav.setAttribute('data-visible', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  
    navToggle.classList.toggle('active');
});

//Create 2 new email addresses to send and recive emails

function sendEmail() {
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;

  // Validate fields
  if (!email || !name || !subject) {
    alert("Please fill in all required fields");
    return;
  }

  var completeSubject =
    "Email: " +
    email +
    " | Phone: " +
    phone +
    " | Name: " +
    name +
    " | " +
    subject;

  Email.send({
    SecureToken: "f011916c-36f5-41bb-8c12-951d8fb8c308",
    Port: "2525",
    To: "pfranco5@utexas.edu",
    From: "spamemail2093411@gmail.com",
    Subject: completeSubject,
    Body: document.getElementById("body").value,
  }).then((message) => alert(message));
}



$(function() {  
  $('article').viewportChecker({
    classToAdd: 'current',
    repeat: true,
    offset: '50%'
  });
});

jQuery(document).ready(function () {
	jQuery(".content").append(
		"<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"
	);
  jQuery(".contentlines").append(
		"<ul class='lines'><li></li><li></li><li></li></ul>"
	);
}); 


