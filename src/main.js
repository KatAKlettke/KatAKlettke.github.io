const colorThemes = document.querySelectorAll('[name="theme"]');

//store theme
const storeTheme = function (theme) {
    localStorage.setItem('theme', theme);
}

// set theme when visitor returns
const setTheme = function() {
    const activeTheme = localStorage.getItem('theme');
    colorThemes.forEach(themeOption => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', (e) => {
        storeTheme(themeOption.id);
    })
})

document.onload = setTheme();