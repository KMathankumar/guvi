document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let age = document.getElementById('age').value;
    let dob = document.getElementById('dob').value;
    let contact = document.getElementById('contact').value;

    let user = {
        username: username,
        password: password,
        age: age,
        dob: dob,
        contact: contact
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert('Signup successful!');

    window.location.href = "login.html";
});