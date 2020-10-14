const pokeName = document.getElementById('searchbar');
const pokeNumber = document.getElementById('num_searchbar');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

$('#searchbar').on('click', function(){
    if($('#searchbar').val() == ""){
        $('#dynamicPokedex').remove();
    };
})


form.addEventListener('submit', (e) => {
    let messages = []
    if (pokeName.value === '' || pokeName.value == null) {
        messages.push('Pokemon name is required');
    }


    if (pokeName.value.length > 20) {
        messages.push('The name you have entered is too long, please keep name less than or equal to 20 characters')
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(',')
    }

    e.preventDefault();
})

function validateName(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /^[A-Za-z]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}


function validateNumber(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}


function search_pokedex() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('pokemon');
    var counter = new Date();


    $('#error').html("");
    $('#dynamicPokedex').remove();

        $('<div class="card" description="'+ counter.getTime() +'" id="dynamicPokedex">You searched for: ' + input +
            '</div>').prependTo($('#pokedexList'));

        for (i = 0; i < x.length; i++) {
            var clone = $(x[i]).clone();
            if (!x[i].children[1].innerText.toLowerCase().includes(input)) {
                //x[i].style.display = "none";
            } else {
                //x[i].style.display = "list-item";
               $(clone).removeClass('pokemon');
                $(clone).appendTo($('#dynamicPokedex'));

                //$('x[i]')
            }
        }

    if ($('#searchbar').val() == ''){
        $('#dynamicPokedex').remove();
    }
}


function search_pokedex_number_popup() {
    let input = document.getElementById('num_searchbar').value;
    let x = document.getElementsByClassName('pokemon');
    let y = document.getElementById('modal-body');
    let pokemon = [];


    $('#dynamicPokedex').remove();

    $('<div class="card" id="dynamicPokedex">You searched for: ' + input +
            '</div>').prependTo($('#pokedexList'));
   // pokemon = x[input].attributes.name.value + ": " + x[input].attributes.title.value + "\n";


    //compensate for 0 indexing
    input--;

    var clone = $(x[input]).clone();
    $(clone).removeClass('pokemon');

    
   
    $(clone).appendTo($('#dynamicPokedex'));
    //confirm(pokemon);

    if ($('#num_searchbar').val() == ''){
        $('#dynamicPokedex').remove();
    }
}
