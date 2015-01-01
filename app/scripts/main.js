(function (window, undefined) {
    'use strict';

    var count = 0;

    setInterval(function () {

        if (count === 0) {
            count++;
            $('.flames')
                .clone()
                .fadeIn()
                .appendTo('.man__leg--left');
            $('.man').addClass('man--panic');
        } else if (count === 1) {
            count++;
            $('.man__leg--left .flames')
                .clone()
                .fadeIn()
                .appendTo('.man__arm--left');
            $('.man')
                .removeClass('man--panic')
                .addClass('man--panic-more');
        } else if (count === 2) {
            count++;
            $('.man__arm--left .flames')
                .clone()
                .fadeIn()
                .addClass('left-arm-flames')
                .appendTo('.man__arm--left');

            $('.man')
                .removeClass('man--panic-more')
                .addClass('man--total-panic');
        }
    }, 5000);
})(window);
