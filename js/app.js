// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initModals();
    initCountdown();
    initFormHandlers();
});

function initTabs() {
    const tabContainers = document.querySelectorAll('.tabs-container');
    tabContainers.forEach(container => {
        const tabButtons = container.querySelectorAll('.tab-btn');
        const tabContents = container.querySelectorAll('.tab-content');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                button.classList.add('active');
                const activeContent = container.querySelector(`#${targetTab}`);
                if (activeContent) activeContent.classList.add('active');
            });
        });
    });
}

function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const modalCloses = document.querySelectorAll('.modal-close, [data-modal-close]');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = trigger.getAttribute('data-modal-target');
            const targetModal = document.getElementById(targetId);
            if (targetModal) targetModal.classList.add('active');
        });
    });
    modalCloses.forEach(close => {
        close.addEventListener('click', () => {
            const activeModal = close.closest('.modal-overlay');
            if (activeModal) activeModal.classList.remove('active');
        });
    });
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    });
}

function initCountdown() {
    const daysEl = document.getElementById('timer-days');
    const hoursEl = document.getElementById('timer-hours');
    const minsEl = document.getElementById('timer-mins');
    const secsEl = document.getElementById('timer-secs');
    if (!daysEl) return;
    const targetDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
    function updateTimer() {
        const now = new Date();
        const diff = targetDate - now;
        if (diff <= 0) return;
        daysEl.textContent = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
        hoursEl.textContent = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        minsEl.textContent = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0');
        secsEl.textContent = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
    }
    updateTimer();
    setInterval(updateTimer, 1000);
}

// GLOBAL TOAST FUNCTION (Exported for other scripts)
window.showToast = function(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>✨ ${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(50px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
};

function initFormHandlers() {
    document.querySelectorAll('form:not([id])').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Action completed successfully!', 'success');
        });
    });
}