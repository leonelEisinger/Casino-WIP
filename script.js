$(document).ready(function() {
    // Default theme
    let isDarkTheme = false;

    $('.dropdown-item').click(function() {
        const selectedTheme = $(this).data('theme');

        if (selectedTheme === 'dark' && !isDarkTheme) {
            $('#theme-stylesheet').attr('href', 'css/dark-theme.css');
			$('#themeDropdown').text('Change theme (Dark)');
            isDarkTheme = true;
        } else if (selectedTheme === 'light' && isDarkTheme) {
            $('#theme-stylesheet').attr('href', 'css/light-theme.css');
			$('#themeDropdown').text('Change theme (Light)');
            isDarkTheme = false;
        }
    });
});
