function openSignupModal() {
    document.getElementById('mainSignupModal').style.display = 'flex';
    document.getElementById('mainSigninModal').style.display = 'none';
}

function openSigninModal() {
    document.getElementById('mainSigninModal').style.display = 'flex';
    document.getElementById('mainSignupModal').style.display = 'none';
}

function closeModal() {
    document.getElementById('mainSigninModal').style.display = 'none';
    document.getElementById('mainSignupModal').style.display = 'none';
}

function displaySignupModal() {
    document.getElementById('mainSigninModal').style.display = 'none';
    document.getElementById('mainSignupModal').style.display = 'flex';
}
