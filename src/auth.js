// Replace these values with your actual Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Register
  function registerUser() {
    const name = document.getElementById('regName').value;
    const surname = document.getElementById('regSurname').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
  
    if (!name || !surname || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert("Account created successfully!");
        toggleForm('login');
      })
      .catch(error => {
        alert(error.message);
      });
  }
  
  // Login
  function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }
  
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert("Logged in successfully!");
        // Redirect if needed
        // window.location.href = "dashboard.html";
      })
      .catch(error => {
        alert(error.message);
      });
  }
  
  // Toggle forms
  function toggleForm(type) {
    const register = document.getElementById('registerForm');
    const login = document.getElementById('loginForm');
    if (type === 'login') {
      register.classList.add('hidden');
      login.classList.remove('hidden');
    } else {
      login.classList.add('hidden');
      register.classList.remove('hidden');
    }
  }