
function register() {
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var Age = document.getElementById("Age").value;
    var Password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;

    debugger

    var data = {
        "Name": Name,
        "Email": Email,
        "Password": Password,
        "Age": Age
    };

    let existingData = [];
    try {
        var storedData = localStorage.getItem('userData');
        existingData = storedData ? JSON.parse(storedData) : [];
        console.log('Loaded existing data:', existingData);
    } catch (error) {
        console.error('Error loading existing data:', error);
    }

    if (Array.isArray(existingData)) {
        existingData.push(data);
        localStorage.setItem('userData', JSON.stringify(existingData));
        alert('Signup successful for ' + Name);
        toggleForm();
    } else {
        console.error('Existing data is not an array:', existingData);
    }
  
  
}
