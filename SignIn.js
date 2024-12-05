function login() {
    var username = document.getElementById("LoginEmail").value;
    var password = document.getElementById("LoginPassword").value;
    var currentuser = null;
    debugger

    var existingData = JSON.parse(localStorage.getItem('userData')) || [];

    // Login credentials
    //var loginEmail = "john.doe@example.com"; // Replace with actual values
    //var loginPassword = "password123";

    // Flag to track if login was successful
    var loginSuccessful = false;
    // Loop through the existing data to check for a match
    for (var i = 0; i < existingData.length; i++) {
        var user = existingData[i];

        if (user.Email === username && user.Password === password) {
            currentuser = user;
            loginSuccessful = true;
            break; // Exit the loop if a match is found
        }
    }

    if (loginSuccessful) {
        alert('Login Successful. Welcome Mr '+ user.Name);
        location.href = "index.html";
    } else {
        alert('Invalid Email or Password. Please try again.');
    }

    // Retrieve data from LocalStorage
   
   
  
    // Assuming 'users.json' is your JSON file
    //fetch('users.json')
    //    .then(response => response.json())
    //    .then(data => {
    //        var user = data.find(u => u.username === username && u.password === password);
    //        if (user) {
    //            alert('Login successful!');
    //        } else {
    //            alert('Invalid username or password');
    //        }
    //    });
}