function checkSelection(e, nameTarget) {
    if (e.target.value == 0) {
        $("input[name='" + nameTarget + "']").css("top", $(e.target).position().top - 9);
        $("input[name='" + nameTarget + "']").css("visibility", "visible").animate({opacity: 1}, 200);
    } 
    else {
        $("input[name='" + nameTarget + "']").animate({opacity: 0}, 200, function() {
            $("input[name='" + nameTarget + "']").css("visibility", "hidden");
        });
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

var stateNavBar = 0;
$(document).scroll(function(position) {
    if ($(window).scrollTop() > 100) {
        if (stateNavBar == 0) {
            stateNavBar = 1;
            $("#navbar").animate({
                backgroundColor: "rgba(255, 255, 255, 1)"
            }, 300);
        }
    } else {
        if (stateNavBar == 1) {
            stateNavBar = 0;
            $("#navbar").animate({
                backgroundColor: "rgba(255, 255, 255, 0)"
            }, 300);
        }
    }
})