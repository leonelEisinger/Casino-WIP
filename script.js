$(document).ready(function() {
    // Default theme

    $('.dropdown-item').click(function() {
        const selectedTheme = $(this).data('theme');

        if (selectedTheme === 'dark') {
            $('#theme-stylesheet').attr('href', 'css/dark-theme.css');
			$('#themeDropdown').text('Change theme (Dark)');
        } else if (selectedTheme === 'light') {
            $('#theme-stylesheet').attr('href', 'css/light-theme.css');
			$('#themeDropdown').text('Change theme (Light)');
        } else if (selectedTheme === 'creative'){
            $('#theme-stylesheet').attr('href', 'css/creative-theme.css');
			$('#themeDropdown').text('Change theme (Creative)');
        } else if (selectedTheme === 'vibrant'){
            $('#theme-stylesheet').attr('href', 'css/vibrant-theme.css');
            $('#themeDropdown').text('Change theme (Vibrant)');
        }
    });
});
