window.onload = function onloadfunction() {
    typeMyName();
}

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

function toggleDarkLight(){
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
}

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

var Messenger = function(el){
    'use strict';
    var m = this;
    
    
    m.init = function(){
      m.codeletters = "&#*+%?£@§$";
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [
        "Joshua D'Silva's Site",
        'Hope you like it',
        'Made it myself.',
        'Thanks for sticking around'
      ];
      
      setTimeout(m.animateIn, 100);
    };
    
    m.generateRandomString = function(length){
      var random_text = '';
      while(random_text.length < length){
        random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      }
      return random_text;
    };
    
    m.animateIn = function(){
      if(m.current_length < m.messages[m.message].length){
        m.current_length = m.current_length + 2;
        if(m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }
        
        var message = m.generateRandomString(m.current_length);
        $(el).html(message);
        
        setTimeout(m.animateIn, 20);
      } else { 
        setTimeout(m.animateFadeBuffer, 20);
      }
    };
    
    m.animateFadeBuffer = function(){
      if(m.fadeBuffer === false){
        m.fadeBuffer = [];
        for(var i = 0; i < m.messages[m.message].length; i++){
          m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
        }
      }
      
      var do_cycles = false;
      var message = ''; 
      
      for(var i = 0; i < m.fadeBuffer.length; i++){
        var fader = m.fadeBuffer[i];
        if(fader.c > 0){
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } else {
          message += fader.l;
        }
      }
      
      $(el).html(message);
      
      if(do_cycles === true){
        setTimeout(m.animateFadeBuffer, 50);
      } else {
        setTimeout(m.cycleText, 10000);
      }
    };
    
    m.cycleText = function(){
      m.message = m.message + 1;
      if(m.message >= m.messages.length){
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