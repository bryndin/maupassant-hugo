(function () {
    const root = document.documentElement;
    const button = document.getElementById("theme-toggle");
    const svg = button.querySelector("svg");

    const themes = ["light", "dark", "system"];

    const icons = {
        light: `
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="4"/>
          <line x1="12" y1="20" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
        `,
        dark: `
          <path d="M21 12.8A9 9 0 1 1 11.2 3 
                   7 7 0 0 0 21 12.8z"/>
        `,
        system: `
          <path d="M12 2 A10 10 0 1 0 12 22 Z"/>
        `
    };

    function getStoredTheme() {
        return localStorage.getItem("theme") || "system";
    }

    function applyTheme(theme) {
        root.classList.remove("theme-light", "theme-dark");

        if (theme === "system") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            root.classList.add(prefersDark ? "theme-dark" : "theme-light");
        } else {
            root.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
        }

        localStorage.setItem("theme", theme);
    }

    function updateIcon(theme) {
        svg.innerHTML = icons[theme];
        button.setAttribute("aria-label", `Theme: ${theme}`);
    }

    function cycleTheme() {
        const current = getStoredTheme();
        const next = themes[(themes.indexOf(current) + 1) % themes.length];
        applyTheme(next);
        updateIcon(next);
    }

    function listenToOS() {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            if (getStoredTheme() === "system") applyTheme("system");
        });
    }

    // Initialize UI
    const initial = getStoredTheme();
    updateIcon(initial);
    listenToOS();
    button.addEventListener("click", cycleTheme);
})();