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

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("longitude:", position.coords.longitude);
    console.log("latitude:", position.coords.latitude);
  });
} else {
  console.log("Geolocation is not supported by this device/browser.");
}

console.log(document.referrer);
console.log(location.href);
console.log(navigator.userAgent);
fetch("https://ipapi.co/json/")
.then(response => response.json())
.then((responseJson) => {
  console.log(responseJson);
});

console.log(JSON.stringify({
  "ip": "2409:4062:115:954b:211e:e74:5180:15ae",
  "city": "Bhubaneswar",
  "region": "Odisha",
  "region_code": "OR",
  "country": "IN",
  "country_name": "India",
  "continent_code": "AS",
  "in_eu": false,
  "postal": "751030",
  "latitude": 20.2724,
  "longitude": 85.8339,
  "timezone": "Asia/Kolkata",
  "utc_offset": "+0530",
  "country_calling_code": "+91",
  "currency": "INR",
  "languages": "en-IN,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,bh,sat,ks,ne,sd,kok,doi,mni,sit,sa,fr,lus,inc",
}));


