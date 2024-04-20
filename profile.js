document.addEventListener('DOMContentLoaded', function() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        let profileDetails = document.getElementById('profileDetails');
        profileDetails.innerHTML = `
            <p>Username: ${currentUser.username}</p>
            <p>Age: ${currentUser.age}</p>
            <p>Date of Birth: ${currentUser.dob}</p>
            <p>Contact: ${currentUser.contact}</p>
        `;
    } else {
        alert('Please login to view profile.');
        window.location.href = "login.html";
    }
});

function editProfile() {
    alert('Edit profile functionality will be implemented soon.');
}