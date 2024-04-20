document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let loginUsername = document.getElementById('loginUsername').value;
    let loginPassword = document.getElementById('loginPassword').value;

    let user = JSON.parse(localStorage.getItem(loginUsername));

    if (user && user.password === loginPassword) {
        alert('Login successful!');
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'profile.html';
    } else {
        alert('Invalid username or password!');
    }
});