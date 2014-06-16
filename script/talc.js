;(function ($) {
    'use strict';

    $.fn.talc = function (o) {
        var d = {
            child: '#tabBody',
            currentClass: '.active'
        },
            fo = $.extend({}, d, o);

        return this.each(function () {
            var parent = this,
                currentName = fo.currentClass.replace('.', '');

            $(this).children()
                .bind('click', function (e) {
                    var num = $(parent).children().index(this);
                    $(parent).children()
                        .removeClass(currentName);
                    $(this)
                        .addClass(currentName);
                    $(fo.child).children()
                        .removeClass(currentName)
                        .eq(num)
                        .addClass(currentName);
                    e.preventDefault();
                });

        });
    };

}(jQuery));
