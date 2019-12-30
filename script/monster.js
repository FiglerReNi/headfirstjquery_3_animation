$(document).ready(function () {
    setInterval(lightning_one, 4000);
    setInterval(lightning_two, 5000);
    setInterval(lightning_three, 7000);

    var headclix = 0;
    var eyesclix = 0;
    var noseclix = 0;
    var mouthclix = 0;

    $('#head').click(function () {
        if (headclix < 9) {
            headclix++;
        } else {
            headclix = 0;
        }
    });
    $('#eyes').click(function () {
        if (eyesclix < 9) {
            eyesclix++;
        } else {
            eyesclix = 0;
        }
    });
    $('#nose').click(function () {
        if (noseclix < 9) {
            noseclix++;
        } else {
            noseclix = 0;
        }
    });
    $('#mouth').click(function () {
        if (mouthclix < 9) {
            mouthclix++;
        } else {
            mouthclix = 0;
        }
    });
});

function lightning_one(){
    $('#lightning1').fadeIn(250).fadeOut(250);
}
function lightning_two(){
    $('#lightning2').fadeIn('fast').fadeOut('fast');
}
function lightning_three(){
    $('#lightning3').fadeIn('fast').fadeOut('fast');
}

//effects
//CSS opacity property
//fadeIn - slow, normal, fast, miliseconds
//fadeTo
//fadeOut
//CSS display property
//show
//hide
//toogle
//slideUp
//slideDown
//slideToggle