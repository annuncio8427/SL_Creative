// js/auth.js
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from './firebase-init.js';

document.addEventListener('DOMContentLoaded', () => {
    // Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = loginForm.querySelector('input[type="email"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;
            try {
                await signInWithEmailAndPassword(auth, email, password);
                showToast('Login successful! Redirecting...', 'success');
                setTimeout(() => window.location.href = 'dashboard.html', 1500);
            } catch (err) {
                showToast('Login failed: ' + err.message, 'error');
            }
        });
    }

    // Register
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = registerForm.querySelector('input[type="email"]').value;
            const password = registerForm.querySelector('input[type="password"]').value;
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                showToast('Account created! Redirecting...', 'success');
                setTimeout(() => window.location.href = 'dashboard.html', 1500);
            } catch (err) {
                showToast('Registration failed: ' + err.message, 'error');
            }
        });
    }

    // Forgot Password
    const forgotForm = document.getElementById('forgot-form');
    if (forgotForm) {
        forgotForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = forgotForm.querySelector('input[type="email"]').value;
            try {
                await sendPasswordResetEmail(auth, email);
                showToast('Password reset email sent!', 'success');
            } catch (err) {
                showToast('Error: ' + err.message, 'error');
            }
        });
    }
});