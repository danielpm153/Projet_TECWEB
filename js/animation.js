function checkSelection(e) {
    if (e.target.value == 0) {
        $(e.target).next().css("visibility", "visible");
    } 
    else {
        $(e.target).next().css("visibility", "hidden");
    }
}

function toggleGridFormCourse(e) {
    var element = $(e.target);

    if (element.is($("#gridTime > div > div:not(#gridTime > div > div:first-of-type)"))) {
        if (element.hasClass("elementWithX")) {
            element.css("background-color", "white");
            element.removeClass("elementWithX");
        } else {
            element.css("background-color", "rgb(120, 120, 200)");
            element.addClass("elementWithX");
        }
    }
    else if ( element.is($("#gridTime > div > div > p")) || element.is($("#gridTime > div > div"))) {
        if ( element.children().is($("p")) )
            element = element.children();
        
        var aux = element.parent();
        var verifyColor = false;

        for (var i = 0; i < 7; i++) {
            aux = aux.next();
            if (!aux.hasClass("elementWithX")) {
                verifyColor = true;
                break;
            }
        }

        aux = element.parent();

        if (verifyColor) {
            for (var i = 0; i < 7; i++) {
                aux = aux.next();
                aux.css("background-color", "rgb(120, 120, 200)");
                aux.addClass("elementWithX");
            }
        }
        else {
            for (var i = 0; i < 7; i++) {
                aux = aux.next();
                aux.css("background-color", "white");
                aux.removeClass("elementWithX");
            }
        }        
    }
}
