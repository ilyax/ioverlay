// Ioverlay
//
// Copyright � Hackafortani, 2013
// Developed by Ilyas Kolasinac Osmanogullari || http://www.ilyax.com
// http://www.hackafortanfoni.com || http://www.alafortanfoni.com
(function (d) { var f, e, c; var b = { init: function (g) { c = this; if (d("#iFade").length === 0) { f = d("<div/>", { id: "iFade", css: { position: "absolute", top: "0%", left: "0%", width: "100%", height: "100%", "background-color": "black", "z-index": "1001", "-moz-opacity": "0.8", opacity: ".80", filter: "alpha(opacity=80)" } }); d("body").append(f) } else { f = d("#iFade"); d(f).show() } e = d("<div/>", { id: "iContent", css: { position: "absolute", padding: "10px", "z-index": "1002", overflow: "auto" }, }); d(e).append(c.show()); d("body").append(e); a(); d(f).click(function (h) { b.close() }) }, show: function () { }, close: function () { d(f).fadeOut("slow", function () { }); d(c).hide().appendTo("body"); d(e).remove() } }; d(window).resize(function () { a() }); function a() { d(e).css({ position: "absolute", left: (d(window).width() - d(e).outerWidth()) / 2, top: (d(window).height() - d(e).outerHeight()) / 2 }) } d.fn.ioverlay = function (g) { if (b[g]) { return b[g].apply(this, Array.prototype.slice.call(arguments, 1)) } else { if (typeof g === "object" || !g) { return b.init.apply(this, arguments) } else { d.error("Method " + g + " does not exist on jQuery.ioverlay") } } } })(jQuery);