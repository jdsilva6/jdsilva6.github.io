function toggleDarkLight(){$('#darkModeSwitch').on('click', () => {
    $('#theme').addClass('dark');
    $('h2').addClass('darkmode');
    $('#body').addClass('dark-mode')
    $(".stylizedDiv").addClass('divdark')
    $('.card-body').addClass('darkCard')
    $('#jumbo').addClass('darkjumbo')
    $("#myPic").attr("src", "assets/images/Engineer_Stacked_Reversed.png")
})}
