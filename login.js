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

// Get elements from the DOM
const loginForm = document.getElementById('login');

// Add event listener to the form submit event
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get user input values
    const email = loginForm['username'].value;
    const password = loginForm['password'].value;

    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log('User logged in:', user);

            // Redirect to another page or perform other actions as needed
            window.location.href = 'enginestatus.html'; // Example redirect
        })
        .catch((error) => {
            // Handle sign-in error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing in:', errorMessage);
            alert('Invalid Password'); // Display error message to the user
        });
});
