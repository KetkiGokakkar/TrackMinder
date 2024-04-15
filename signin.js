// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBthrG-Adt216QwDj6veLdAs_6JsVwMDSA",
    authDomain: "track-minder-ae5c0.firebaseapp.com",
    projectId: "track-minder-ae5c0",
    storageBucket: "track-minder-ae5c0.appspot.com",
    messagingSenderId: "970842255905",
    appId: "1:970842255905:web:80f15a64b74e2185cf2960",
    measurementId: "G-1NC7BNJ5N7"
  };

firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('SignUpForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form['name'].value;
        const email = form['email'].value;
        const occupation = form['occupation'].value;
        const dob = form['dob'].value;
        const number = form['number'].value;
        const password = form['password'].value;
        const confirmPassword = form['confirmPassword'].value;

        // Validate form data
        if (password !== confirmPassword) {
            alert('Password and Confirm Password must match!');
            return;
        }

        console.log('Form data:', name, email, occupation, dob, number);

        // Create user with email and password
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed up successfully
                const user = userCredential.user;
                console.log('User signed up:', user);

                // Redirect to another page or perform other actions as needed
                window.location.href = 'enginestatus.html'; // Redirect example
            })
            .catch((error) => {
                // Handle sign-up error
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error signing up:', errorMessage);
                alert(errorMessage); // Display error message to the user
            });
    });
});
