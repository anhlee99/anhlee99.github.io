

function calculateSettingAsThemeString({ localStorageTheme, systemSettingLight }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingLight.matches) {
        return "light";
    }

    return "darkmode";
}

const localStorageTheme = localStorage.getItem("mode");
const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingLight });
console.log(currentThemeSetting);
updateThemeOnHtmlEl({ theme: currentThemeSetting });


function darkMode() {
    localStorage.setItem("mode", "darkmode" === localStorage.getItem("mode") ? "light" : "darkmode");
    updateThemeOnHtmlEl({ theme: localStorage.getItem("mode") });
};

function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
    if (theme === "darkmode") {
        document.getElementsByClassName("theme-isDark")[0].children[0].setAttribute("class", "bx bx-sun");
    }
    else {
        document.getElementsByClassName("theme-isDark")[0].children[0].setAttribute("class", "bx bx-moon");
    }
}

