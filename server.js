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
    SecureToken: "ee323115-7348-4f75-8995-0c4477a085c0",
    Port: "2525",
    To: "inboxportfolio13@gmail.com",
    From: "sendportfolio13@gmail.com",
    Subject: completeSubject,
    Body: document.getElementById("body").value,
  }).then((message) => alert(message));
};





jQuery(document).ready(function () {
	jQuery(".contentC").append(
		"<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"
	);
  jQuery(".contentlines").append(
		"<ul class='lines'><li></li><li></li><li></li><li></li><li></li></ul>"
	);
}); 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      if(entry.target.classList.contains('hidden')){
      entry.target.classList.add('show');
      }
      if(entry.target.classList.contains('hidden1')){
        entry.target.classList.add('fade');
      }
    } else{
      //show is animation
      entry.target.classList.remove('show','fade');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden1');
hiddenElements.forEach((el) => observer.observe(el));





