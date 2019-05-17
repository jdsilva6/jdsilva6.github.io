function toggleDarkLight(){$('#darkModeSwitch').on('click', () => {
    $('.html').addClass('dark');
    $(this).text(function(i, text){
        return text === "Dark Mode" ? "Light Mode" : "Dark Mode"
    })
})}
