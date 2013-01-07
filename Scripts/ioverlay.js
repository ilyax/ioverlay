// Ioverlay
//
// Copyright © Hackafortani, 2013
// Developed by Ilyas Kolasinac Osmanogullari || http://www.ilyax.com
// http://www.hackafortanfoni.com || http://www.alafortanfoni.com

(function ($) {
    "use strict";

    var iFade,iContent,tempContainer;

    var methods = {
        init: function (options) {

            tempContainer = this;

            if ($('#iFade').length === 0) {
                iFade = $('<div/>', {
                    id: 'iFade',
                    css: {
                        position: 'absolute',
                        top: '0%',
                        left: '0%',
                        width: '100%',
                        height: '100%',
                        'background-color': 'black',
                        'z-index': '1001',
                        '-moz-opacity': '0.8',
                        opacity: '.80',
                        filter: 'alpha(opacity=80)'
                    }
                });
                $('body').append(iFade);
            }
            else {
                iFade = $('#iFade');
                $(iFade).show();
            }

            iContent = $('<div/>', {
                id: 'iContent',
                css: {
                    position: 'absolute',
                    padding: '10px',
                    'z-index': '1002',
                    overflow: 'auto'
                }
            });

            $(iContent).append(tempContainer.show());
            $('body').append(iContent);
            UpdatePosition();

            $(iFade).click(function (e) {
                methods.close();
            });

        },
        show: function () {

        },
        close: function () {
            $(iFade).fadeOut('slow', function () { });
            $(tempContainer).hide().appendTo('body');
            $(iContent).remove();
        }
    };

    $(window).resize(function () {
        UpdatePosition();
    });

    /* content position */
    function UpdatePosition() {
        $(iContent).css({
            position: 'absolute',
            left: ($(window).width()
              - $(iContent).outerWidth()) / 2,
            top: ($(window).height()
              - $(iContent).outerHeight()) / 2
        });
    }


    $.fn.ioverlay = function (method) {

        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.ioverlay');
        }

    };
})(jQuery);