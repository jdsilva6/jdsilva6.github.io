function toggleDarkLight(){$('#darkModeSwitch').on('click', () => {
    $('#theme').addClass('dark');
    $('h2').addClass('darkmode');
    $('#body').addClass('dark-mode')
    $(".stylizedDiv").addClass('divdark')
    $('#jumbo').addClass('darkjumbo')
    $("#myPic img").attr("src", "assets/images/Engineer_Stacked_Reveresed.png")
})}
