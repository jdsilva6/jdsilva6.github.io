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
    $('#theme').removeClass('dark');
    $('h2').removeClass('darkmode');
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

function rotateToggler(){$('#togglerIcon').on('click',()=>{
    var rotated = false;
      if (!rotated) {
        $(this).find("span").css({
          "-moz-transform": "rotate(90deg)",
           "-webkit-transform": "rotate(90deg)",
            "-o-transform": "rotate(90deg)",
             "-ms-transform": "rotate(90deg)",
              "transform": "rotate(90deg)"
        });
      } else {
        $(this).find("span").css({
          "-moz-transform": "rotate(0deg)",
           "-webkit-transform": "rotate(0deg)",
            "-o-transform": "rotate(0deg)",
             "-ms-transform": "rotate(0deg)",
              "transform": "rotate(0deg)"
        });
      }
})
}
