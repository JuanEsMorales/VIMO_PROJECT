const weight = document.querySelector('#weight')
const output = document.querySelector('.weight-output')

output.textContent = weight.value

weight.addEventListener('input', function() {
  output.textContent = weight.value
});
const height = document.querySelector('#height')
const outputh = document.querySelector('.height-output')

outputh.textContent = height.value

height.addEventListener('input', function() {
  outputh.textContent = height.value
});

// firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhB6zuOcBM8fSmRfBH6V_oXARtuFXOduc",
  authDomain: "elite-flower.firebaseapp.com",
  projectId: "elite-flower",
  storageBucket: "elite-flower.appspot.com",
  messagingSenderId: "128100818648",
  appId: "1:128100818648:web:68109623906fd3c10941ad",
  measurementId: "G-EZ0PBM3GFQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// firebase
