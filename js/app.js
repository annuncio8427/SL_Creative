/* ============================================
   SL Creative Portfolio Agency
   Master Application Engine
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    initTabs();
    initModals();
    initCountdown();
    initFormHandlers();
    initMobileMenu();

});

/* ============================================
   TAB SWITCHING
============================================ */

function initTabs() {

    const tabContainers = document.querySelectorAll(".tabs-container");

    tabContainers.forEach(container => {

        const tabButtons = container.querySelectorAll(".tab-btn");
        const tabContents = container.querySelectorAll(".tab-content");

        tabButtons.forEach(button => {

            button.addEventListener("click", () => {

                const target = button.dataset.tab;

                tabButtons.forEach(btn =>
                    btn.classList.remove("active")
                );

                tabContents.forEach(content =>
                    content.classList.remove("active")
                );

                button.classList.add("active");

                const activeTab = container.querySelector(`#${target}`);

                if (activeTab) {
                    activeTab.classList.add("active");
                }

            });

        });

    });

}

/* ============================================
   MODALS
============================================ */

function initModals() {

    const triggers = document.querySelectorAll("[data-modal-target]");
    const closes = document.querySelectorAll(".modal-close,[data-modal-close]");

    triggers.forEach(trigger => {

        trigger.addEventListener("click", e => {

            e.preventDefault();

            const modal = document.getElementById(
                trigger.dataset.modalTarget
            );

            if (modal) {

                modal.classList.add("active");

                document.body.style.overflow = "hidden";

            }

        });

    });

    closes.forEach(close => {

        close.addEventListener("click", () => {

            const modal = close.closest(".modal-overlay");

            if (modal) {

                modal.classList.remove("active");

                document.body.style.overflow = "";

            }

        });

    });

    document.querySelectorAll(".modal-overlay").forEach(modal => {

        modal.addEventListener("click", e => {

            if (e.target === modal) {

                modal.classList.remove("active");

                document.body.style.overflow = "";

            }

        });

    });

}

/* ============================================
   COUNTDOWN
============================================ */

function initCountdown() {

    const days = document.getElementById("timer-days");
    const hours = document.getElementById("timer-hours");
    const mins = document.getElementById("timer-mins");
    const secs = document.getElementById("timer-secs");

    if (!days) return;

    const targetDate = new Date(
        Date.now() + 14 * 24 * 60 * 60 * 1000
    );

    function update() {

        const now = new Date();

        const diff = targetDate - now;

        if (diff <= 0) return;

        days.textContent = String(
            Math.floor(diff / (1000 * 60 * 60 * 24))
        ).padStart(2, "0");

        hours.textContent = String(
            Math.floor(diff / (1000 * 60 * 60) % 24)
        ).padStart(2, "0");

        mins.textContent = String(
            Math.floor(diff / (1000 * 60) % 60)
        ).padStart(2, "0");

        secs.textContent = String(
            Math.floor(diff / 1000 % 60)
        ).padStart(2, "0");

    }

    update();

    setInterval(update, 1000);

}

/* ============================================
   TOAST NOTIFICATION
============================================ */

function showToast(message, type = "info") {

    let container = document.querySelector(".toast-container");

    if (!container) {

        container = document.createElement("div");

        container.className = "toast-container";

        document.body.appendChild(container);

    }

    const toast = document.createElement("div");

    toast.className = `toast toast-${type}`;

    toast.innerHTML = `<span>✨ ${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "0";

        toast.style.transform = "translateX(40px)";

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3500);

}

/* ============================================
   FORM HANDLERS
============================================ */

function initFormHandlers() {

    document.querySelectorAll("form").forEach(form => {

        form.addEventListener("submit", e => {

            e.preventDefault();

            showToast("Action completed successfully!", "success");

        });

    });

}

/* ============================================
   MOBILE MENU
============================================ */

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

        if (overlay) {

            overlay.classList.remove("hidden");

        }

        document.body.style.overflow = "hidden";

        if (menuIcon) {

            menuIcon.textContent = "close";

        }

    }

    function closeMenu() {

        mobileMenu.classList.remove("translate-x-0");

        mobileMenu.classList.add("translate-x-full");

        if (overlay) {

            overlay.classList.add("hidden");

        }

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

    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            closeMenu();

        }

    });

}

/* ============================================
   NAVBAR SHADOW
============================================ */

const navbar = document.getElementById("main-nav");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("shadow-lg");

        } else {

            navbar.classList.remove("shadow-lg");

        }

    });

}
