$(document).ready(() => {
    
    $('.main_btna, .main_btn, nav li:eq(1)').on('click', () => {
        $('.overlay').fadeTo('slow', 1);
        $('.modal').animate({
            opacity: 'show',
            height: 'show'
        }, {
            duration: 2000,
            specialEasing: {
                opacity: 'swing',
                height: 'swing'
            }
        });
    });

    $('.close').on('click', () => {
        $('.overlay').fadeOut('slow', 0);
        $('.modal').animate({
            opacity: 'hide',
            height: 'hide'
        }, {
            duration: 1000,
            specialEasing: {
                opacity: 'swing',
                height: 'swing'
            }
        });
    });
    // Ajax
    $('form').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'server.php',
            data: {name: $('input:eq(0)').val(), phone: $('input:eq(1)').val(), mail: $('input:eq(2)').val(), message: $('textarea').val()},
            dataType: "html",

            success: function () {
                console.log('отправлено');
                alert('Спасибо!');
            },
            error: function () {
                $('.overlay').fadeOut('slow', 0);
                $('.modal').animate({
                    opacity: 'hide',
                    height: 'hide'
                }, {
                    duration: 1000,
                    specialEasing: {
                        opacity: 'swing',
                        height: 'swing'
                    }
                });
                console.log('Что-то пошло не так');
                alert('Что-то пошло не так');
            }
        });
        
    });
});
