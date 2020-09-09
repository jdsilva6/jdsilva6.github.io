window.onload = function onloadfunction() {
  typeMyName();

  
  //if(date)
}

$(document).ready(function () {

  var date = new Date;

  if(date.getHours()>18 || date.getHours()<7)
  {
    $('#darkModeSwitch').click();
  }

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});

var i = 0;
var name = "Welcome to Joshua D'Silva's Site";
var speed1 = 50;

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

function animate() {
  $('#WelcomeMsg').fadeIn("slow", "linear").attr("display", "inline");
  $('#profilepic').fadeIn("slow").attr("display", "inline");
  $('#university').fadeIn("slow").attr("display", "inline");
}

function navListIteratorAdd(){
  $(this).addClass("lavender");
}

function navListIteratorRemove(){
  $(this).removeClass("lavender");
}

function ExpandAll() {
  $('#ExpandAll').html("Collapse All")
  $("#ExpandAll").attr("onclick", "CollapseAll()");
}

function CollapseAll() {
  $('#ExpandAll').html("Expand All")
  $("#ExpandAll").attr("onclick", "ExpandAll()");
}

function toggleDarkLight() {
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
  
 
  $("#univeristy").attr("src", "assets/images/Engineer_Stacked_Reversed.png");
  $("#darkModeSwitch").attr("onclick", "toggleLightMode()");
  $("#facebook").addClass("lavender");
  $("#github").addClass("lavender");
  $("#linkedin").addClass("lavender");
  $('#navColor').addClass("dark-mode");
  $('#togglerIcon').addClass("dark-mode")
  $('.navbar-nav').children().children().css({"color":"lavender"});
  $('#Josh').addClass("lavender");
  $("#titleBreak").addClass('lavender-bg');
  $('.nav-link.active').addClass("lavender");
  $("#darkModeSwitch").attr("onclick", "toggleLightMode()");
  $('.btn').addClass('darkbtn');
  $('#ContactMeBtn').addClass('lightbtn');

}

function toggleLightMode() {
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

  $("#univeristy").attr("src", "assets/images/Engineer_Stacked_PurpleGrey.png")
 
  $("#facebook").removeClass("lavender");
  $("#github").removeClass("lavender");
  $("#linkedin").removeClass("lavender");
  $('#togglerIcon').removeClass("dark-mode")
  $('#Josh').removeClass("lavender");
  $('.navbar-nav').children().children().css({"color":"black"});
  $('.navbar-nav').children().children().last().css({"color":"white"});
  $('#navColor').removeClass("dark-mode");
  $("#titleBreak").removeClass('lavender-bg');
  $("#darkModeSwitch").attr("onclick", "toggleDarkLight()");
  $('.btn').removeClass('darkbtn')
}



var Messenger = function (el) {
  'use strict';
  var m = this;


  m.init = function () {
    m.codeletters = "10101001";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      "Joshua D'Silva's Site",
      "Welcome to my World.",
      "Hello there.",
      'Hope you like it.',
      'Made it myself.',
      'Thanks for sticking around!'
    ];

    setTimeout(m.animateIn, 150);
  };

  m.generateRandomString = function (length) {
    var random_text = '';
    while (random_text.length < length) {
      random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
    }
    return random_text;
  };

  m.animateIn = function () {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function () {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({
          c: (Math.floor(Math.random() * 12)) + 1,
          l: m.messages[m.message].charAt(i)
        });
      }
    }

    var do_cycles = false;
    var message = '';

    for (var i = 0; i < m.fadeBuffer.length; i++) {
      var fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if (do_cycles === true) {
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 10000);
    }
  };

  m.cycleText = function () {
    m.message = m.message + 1;
    if (m.message >= m.messages.length) {
      m.message = 0;
    }

    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');

    setTimeout(m.animateIn, 200);
  };

  m.init();
}

console.clear();
var messenger = new Messenger($('#messenger'));
/* function rotateToggler(){$('#togglerIcon').on('click', () => {
    $('#togglerIcon').addClass('rotated')
})} */