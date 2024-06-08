document.getElementById('competitionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Build Description validation
    const buildDescription = document.getElementById('buildDescription').value;
    const buildDescriptionError = document.getElementById('buildDescriptionError');
    if (buildDescription.trim() === "") {
        buildDescriptionError.textContent = "Build description is required.";
        isValid = false;
    } else {
        buildDescriptionError.textContent = "";
    }

    if (isValid) {
        alert("Entry submitted successfully!");
        // Here you can add code to actually submit the form data to the server
        // For example, using AJAX or a form submission.
    }
});
