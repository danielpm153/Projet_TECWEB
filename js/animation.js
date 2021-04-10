function checkSelection(e) {
    if (e.target.value == 0) {
        $(e.target).next().show();
        $(e.target).next().next().show();
    } 
    else {
        $(e.target).next().hide();
        $(e.target).next().next().hide();
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

function sendAlert(title, message, type, callBackFunction = null) {
    var backGround = $("<div>").addClass("backGroundMessage");
    $("body").prepend(backGround);

    var backGroundMessage = $("<div>").addClass("alertMessage");
    backGround.prepend(backGroundMessage);

    var titleMessage = $("<p>").html(title);
    var textMessage = $("<p>");
    textMessage.append($("<b>").html(message))

    switch(type) {
        case "success": titleMessage.css("background-color", "rgb(88, 184, 69)");
            break;
        case "failed": titleMessage.css("background-color", "rgb(252, 74, 74)");
            break;
        case "alert" : titleMessage.css("background-color", "rgb(255, 176, 7)");
            break;
    }

    backGroundMessage.append(titleMessage);
    backGroundMessage.append(textMessage);

    backGround.fadeTo(300, 1);

    backGroundMessage.click(function () {
        backGround.fadeTo(300, 0, function() {
            backGround.remove();
        });

        if (callBackFunction != null) {
            callBackFunction();
        }
    });
}
