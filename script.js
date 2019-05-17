function toggleDarkLight(){$('#darkModeSwitch').on('click', () => {
   
    $(this).text(function(i, text){
        return text === "Dark Mode" ? "Light Mode" : "Dark Mode"
    })
    $('.body').addClass('dark');
})}
