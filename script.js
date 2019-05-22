$(".rotate").click(function () {
    $(this).toggleClass("down");
})

function toggleDarkLight(){$('#darkModeSwitch').on('click', () => {
    $('#darkModeSwitch').html("Light")
    $('#theme').addClass('dark');
    $('h2').addClass('darkmode');
    $('#body').addClass('dark-mode')
    $(".stylizedDiv").addClass('divdark')
    $(".stylized").addClass('darkb')
    $('.card-body').addClass('darkCard')
    $('.card-header').addClass('darkCardHeader')
    $('#jumbo').addClass('darkjumbo')
    $('.btn').addClass('darkbtn')
    $("#myPic").attr("src", "assets/images/Engineer_Stacked_Reversed.png")
    $("#darkModeSwitch").attr("onclick", "toggleLightMode()")
})}

function toggleLightMode(){$('#darkModeSwitch').on('click',() =>{
    $('#darkModeSwitch').html("Dark")
    $('#theme').removeClass('dark')
    $('h2').removeClass('darkmode')
    $('#body').removeClass('dark-mode')
    $(".stylizedDiv").removeClass('divdark')
    $(".stylized").removeClass('darkb')
    $('.card-body').removeClass('darkCard')
    $('.card-header').removeClass('darkCardHeader')
    $('#jumbo').removeClass('darkjumbo')
    $('.btn').removeClass('darkbtn')
    $("#myPic").attr("src", "assets/images/Engineer_Stacked_PurpleGrey.png")
    $("#darkModeSwitch").attr("onclick", "toggleDarkLight()")
})}

/* function rotateToggler(){$('#togglerIcon').on('click', () => {
    $('#togglerIcon').addClass('rotated')
})} */