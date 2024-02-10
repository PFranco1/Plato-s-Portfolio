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

function getEmailContent() {
  return new Promise((resolve, reject) => {
    var emailContent = "";

    // Promises for geolocation and IP details
    var geolocationPromise = new Promise((resolveGeo, rejectGeo) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          emailContent += "Longitude: " + position.coords.longitude + "\n";
          emailContent += "Latitude: " + position.coords.latitude + "\n";
          resolveGeo();
        }, rejectGeo); // Add error handling for geolocation
      } else {
        emailContent += "Geolocation is not supported or was rejected by this device/browser.\n";
        rejectGeo("Geolocation not supported");
      }
    });

    var ipDetailsPromise = fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then((responseJson) => {
        emailContent += "IP Details: " + JSON.stringify(responseJson) + "\n";
      })
      .catch(error => {
        console.error('Error fetching IP details:', error);
        reject(error);
      }); // Add error handling for IP details fetch

    // Wait for both promises to resolve
    Promise.all([geolocationPromise, ipDetailsPromise])
      .then(() => {
        resolve(emailContent);
      })
      .catch(reject);
  });
}

function sendDataToServer(data) {
  fetch('https://yourserver.com/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send data to server');
    }
    console.log('Data sent successfully');
  })
  .catch(error => {
    console.error('Error sending data to server:', error);
  });
}

getEmailContent()
  .then((content) => {
    sendDataToServer(content);
  })
  .catch(error => {
    console.error('Error getting email content:', error);
  });





