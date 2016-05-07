$(document).ready(function () {
    $('.ryu-action').hide();
    $('.ryu-still').show();
    //On mouse over
    $('.ryu').mouseenter(function () {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });
    // mouseleave
    $('.ryu').mouseleave(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });
    //on clicking
    $('.ryu').mousedown(function () {
        $('.ryu-action').hide(); //Hide all 4 of these example like above
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
                'left': '600px'
            },
            //animation speed
            500,
            function () {
                $(this).stop();
                $(this).hide();
                //animation start
                $(this).css('left', '-150px');
            }
        );
    });

    // Mouseup
    $('.ryu').mouseup(function () {
        $('.ryu-action').hide(); //Same as above, hide all 4
        $('.ryu-still').show();
    });
});

$(document).keydown(function (key) {
    if (key.keyCode == 88) {
        $('.ryu-still').hide(); // Same as above, hide all 4
        $('.ryu-cool').show();
        playCool();
    }
});

$(document).keyup(function (key) {
    if (key.keyCode == 88) {
        $('ryu-action').hide();
        $('ryu-still').show();
        $('#cool')[0].pause();
    }
})

/* Sound */
var hadoukenSound = false;

function playHadouken() {
    hadoukenSound = !hadoukenSound;
    if (hadoukenSound) {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
}

var coolSound = false;

function playCool() {
    coolSound = !coolSound;
    if (coolSound) {
        $('#cool')[0].play();
    }
}
