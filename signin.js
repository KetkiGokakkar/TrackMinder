document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signInForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const occupation = document.getElementById('occupation').value;
        const dob = document.getElementById('dob').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate form data (you can add your validation logic here)

        // Example validation: Ensure password and confirm password match
        if (password !== confirmPassword) {
            alert('Password and Confirm Password must match!');
            return;
        }

        // Submit the form (you can replace this with your own form submission logic)
        alert(`Form submitted:\nName: ${name}\nEmail: ${email}\nOccupation: ${occupation}\nDate of Birth: ${dob}`);
        form.reset();
    });
});
