const colorThemes = document.querySelectorAll('[name="theme"]');

const themeElement = document.body;

/**
 * Stores the id of the theme to local storage.
 * @param theme string, theme ID
 */
const storeTheme = function (theme) {
    localStorage.setItem('theme', theme);
}

/**
 * Retrieves previously set theme id from local storage. If there is one available, restores that choice.
 */
const setRememberedTheme = function() {
    const activeTheme = localStorage.getItem('theme');
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
    setTheme(activeTheme);
}

/**
 * Sets Event listener for each theme radio button and calls storeTheme(themeID) on click.
 */
colorThemes.forEach((themeOption) => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
        setTheme(themeOption.id);
    });
})

const setTheme = function (theme) {
    if (theme === 'light') {
        themeElement.classList.remove('dark');
        themeElement.classList.remove('blue');
        themeElement.classList.remove('green');
        themeElement.classList.add('light');
    }
    else if (theme === 'dark') {
        themeElement.classList.remove('light');
        themeElement.classList.remove('blue');
        themeElement.classList.remove('green');
        themeElement.classList.add('dark');
    }
    else if (theme === 'green') {
        themeElement.classList.remove('dark');
        themeElement.classList.remove('blue');
        themeElement.classList.remove('light');
        themeElement.classList.add('green');
    }
    else {
        themeElement.classList.remove('dark');
        themeElement.classList.remove('light');
        themeElement.classList.remove('green');
        themeElement.classList.add('blue');
    }

}

document.onload = setRememberedTheme();


