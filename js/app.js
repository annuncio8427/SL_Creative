/* SL Creative Portfolio Agency - Master Application Engine */

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initModals();
  initCountdown();
  initFormHandlers();
});

/* Tab Switching Logic */
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
        if (activeContent) {
          activeContent.classList.add('active');
        }
      });
    });
  });
}

/* Modal Management */
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const modalCloses = document.querySelectorAll('.modal-close, [data-modal-close]');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.add('active');
      }
    });
  });

  modalCloses.forEach(close => {
    close.addEventListener('click', () => {
      const activeModal = close.closest('.modal-overlay');
      if (activeModal) {
        activeModal.classList.remove('active');
      }
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
}

/* Live Countdown Timer (For Coming Soon Screen) */
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

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* Global Toast Notification System */
function showToast(message, type = 'info') {
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
}

/* Form Handlers Simulation */
function initFormHandlers() {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Action completed successfully!', 'success');
    });
  });
}
/* ================================
   MOBILE MENU
================================ */

initMobileMenu();

function initMobileMenu() {

    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("overlay");
    const menuIcon = document.getElementById("menu-icon");

    if (!menuBtn || !mobileMenu) return;

    function openMenu() {
        mobileMenu.classList.remove("translate-x-full");
        mobileMenu.classList.add("translate-x-0");

        overlay.classList.remove("hidden");

        document.body.style.overflow = "hidden";

        if (menuIcon) {
            menuIcon.textContent = "close";
        }
    }

    function closeMenu() {
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("translate-x-full");

        overlay.classList.add("hidden");

        document.body.style.overflow = "";

        if (menuIcon) {
            menuIcon.textContent = "menu";
        }
    }

    menuBtn.addEventListener("click", () => {

        if (mobileMenu.classList.contains("translate-x-full")) {
            openMenu();
        } else {
            closeMenu();
        }

    });

    if (closeBtn) {
        closeBtn.addEventListener("click", closeMenu);
    }

    if (overlay) {
        overlay.addEventListener("click", closeMenu);
    }

    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });

}
