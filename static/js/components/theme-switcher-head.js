(function () {
    const root = document.documentElement;

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

    // Apply theme immediately (prevents flash)
    applyTheme(getStoredTheme());
})();