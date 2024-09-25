$(document).ready(function() {
    // Default theme
    let isDarkTheme = false;

    $('.dropdown-item').click(function() {
        const selectedTheme = $(this).data('theme');

        if (selectedTheme === 'dark' && !isDarkTheme) {
            $('#theme-stylesheet').attr('href', 'css/dark-theme.css');
            isDarkTheme = true;
        } else if (selectedTheme === 'light' && isDarkTheme) {
            $('#theme-stylesheet').attr('href', 'css/light-theme.css');
            isDarkTheme = false;
        }
    });
});
