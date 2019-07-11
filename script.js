window.onload = function onloadfunction() {
    typeMyName();
}

var i = 0;
var name = "Welcome to Joshua D'Silva's Site";
var speed1 = 120;

function typeMyName() {
  if (i < name.length) {
    document.getElementById("WelcomeMsg").innerHTML += name.charAt(i);
    i++;
    
    setTimeout(typeMyName, speed1);
  }
}

$(".rotate").click(function () {
    $(this).toggleClass("down");
})

function animate(){
    $('#WelcomeMsg').fadeIn("slow","linear").attr("display","inline");
    $('#profilepic').fadeIn("slow").attr("display","inline");
    $('#university').fadeIn("slow").attr("display","inline");
}

function ExpandAll(){
    $('#ExpandAll').html("Collapse All")
    $("#ExpandAll").attr("onclick", "CollapseAll()");
}

function CollapseAll(){
    $('#ExpandAll').html("Expand All")
    $("#ExpandAll").attr("onclick", "ExpandAll()");
}

function toggleDarkLight(){$('#darkModeSwitch').on('click', () => {
    $('#darkModeSwitch').html("Light");
    $('#theme').addClass('dark');
    $('h2').addClass('darkmode');
    $('#body').addClass('dark-mode');
    $(".stylizedDiv").addClass('divdark');
    $(".stylized").addClass('darkb');
    $("#JoshDescription").addClass('darkb');
    $("#WelcomeMsg").addClass('darkb');
    $('.card-body').addClass('darkCard');
    $('.card-header').addClass('darkCardHeader');
    $('#jumbo').addClass('darkjumbo');
    $('.btn').addClass('darkbtn');
    $("#univeristy").attr("src", "assets/images/Engineer_Stacked_Reversed.png");
    $("#darkModeSwitch").attr("onclick", "toggleLightMode()");
})}

function toggleLightMode(){$('#darkModeSwitch').on('click',() =>{
    $('#darkModeSwitch').html("Dark")
    $('#theme').removeClass('dark')
    $('h2').removeClass('darkmode')
    $('#body').removeClass('dark-mode')
    $(".stylizedDiv").removeClass('divdark')
    $(".stylized").removeClass('darkb')
    $("#JoshDescription").removeClass('darkb');
    $("#WelcomeMsg").removeClass('darkb');
    $('.card-body').removeClass('darkCard')
    $('.card-header').removeClass('darkCardHeader')
    $('#jumbo').removeClass('darkjumbo')
    $('.btn').removeClass('darkbtn')
    $("#univeristy").attr("src", "assets/images/Engineer_Stacked_PurpleGrey.png")
    $("#darkModeSwitch").attr("onclick", "toggleDarkLight()")
})}

/* function rotateToggler(){$('#togglerIcon').on('click', () => {
    $('#togglerIcon').addClass('rotated')
})} */