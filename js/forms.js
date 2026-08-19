// js/forms.js
import { db, collection, addDoc } from './firebase-init.js';

document.addEventListener('DOMContentLoaded', () => {
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = {
                name: contactForm.querySelector('input[placeholder*="Name"]')?.value || '',
                email: contactForm.querySelector('input[type="email"]')?.value || '',
                message: contactForm.querySelector('textarea')?.value || '',
                timestamp: new Date()
            };
            try {
                await addDoc(collection(db, "contacts"), data);
                showToast('Message sent successfully!', 'success');
                contactForm.reset();
            } catch (err) {
                showToast('Error sending message: ' + err.message, 'error');
            }
        });
    }

    // Booking Form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            // Add your booking field selectors here
            const data = {
                firstName: bookingForm.querySelector('input[placeholder*="First"]')?.value || '',
                lastName: bookingForm.querySelector('input[placeholder*="Last"]')?.value || '',
                email: bookingForm.querySelector('input[type="email"]')?.value || '',
                timestamp: new Date()
            };
            try {
                await addDoc(collection(db, "bookings"), data);
                showToast('Booking confirmed!', 'success');
                bookingForm.reset();
            } catch (err) {
                showToast('Booking error: ' + err.message, 'error');
            }
        });
    }

    // Career Form
    const careerForm = document.getElementById('career-form');
    if (careerForm) {
        careerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = {
                name: careerForm.querySelector('input[placeholder*="Name"]')?.value || '',
                email: careerForm.querySelector('input[type="email"]')?.value || '',
                message: careerForm.querySelector('textarea')?.value || '',
                timestamp: new Date()
            };
            try {
                await addDoc(collection(db, "applications"), data);
                showToast('Application submitted!', 'success');
                careerForm.reset();
            } catch (err) {
                showToast('Application error: ' + err.message, 'error');
            }
        });
    }
});