alert("This website generate password , Please don't share it with anyone")

function generatePassword() {
    const length = document.getElementById("length").value;
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
    document.getElementById("message").textContent = "Password generated!";
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(passwordField.value).then(() => {
        document.getElementById("message").textContent = "Password copied to clipboard!";
    }).catch(err => {
        document.getElementById("message").textContent = "Failed to copy password.";
    });
}
