var apiRoot = "https://meuapptest.herokuapp.com/api";
//var apiRoot = "http://localhost/cours-prive-api/api";

var msParJour = 1000 * 60 * 60 * 24;

//-----------------------------------------------LOGIN-----------------------------------------------\\

function login() {
    var email = $("input[name='email']").val();
    var passe = $("input[name='passe']").val();
    console.log(email, passe)
    $.ajax({
        type: "POST",
        url: apiRoot + "/authenticate",
        headers: { "debug-data": true },
        data: { "email": email, "passe": passe },
        success: function(oRep) {
            console.log("Sucess: /POST /authenticate");
            localStorage.setItem('hash', oRep.hash);
            window.location.href = "controleur.php?action=Connexion&hash=" + oRep.hash;

        },
        error: function(error) {
            console.log("Erreur: /POST /authenticate");
            sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
        },
        dataType: "json"
    });
}

function inscrireUser() {
    var nom = $("input[name='nomSignup']").val();
    var prenom = $("input[name='prenomSignup']").val();
    var dateNaissance = $("input[name='dateSignup']").val();
    var telephone = $("input[name='telSignup']").val();
    var email = $("input[name='emailSignup']").val();
    var passe = $("input[name='passeSignup']").val();
    // alert(email);

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var testEmail = regexEmail.test(String(email).toLowerCase());

    const regexPasse = /(?=^.{6,}$).*$/;
    var testePasse = regexPasse.test(String(passe));

    const regexNom = /^[a-z ]+$/;
    var testeNom = regexNom.test(String(nom));
    var testePrenom = regexNom.test(String(prenom));


    //if (testEmail && testePasse && testeNom && testePrenom) {
     if (true) {
        $.ajax({
            type: "POST",
            url: apiRoot + "/users",
            data: { "email": email, "passe": passe, "nom": nom, "prenom": prenom, "dateNaissance": dateNaissance, "telephone": telephone },
            success: function(oRep) {
                console.log("Sucess: POST /users");
                sendAlert("Success", "Enregistrement réussi", "success", function() {
                    cleanSignUp();
                    $(".backGroundGrayCenterContent").fadeOut(200);
                });
            },
            error: function(error) {
                console.log("Erreur: POST /users");
                sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
            },
            dataType: "json"
        });
    } else {
        console.log("Erro Regex");
        sendAlert("Failed", "Certains champs ont été mal renseignés!", "failed");
    }

}

function cleanSignUp() {
    $("input[name='nomSignup']").val("");
    $("input[name='prenomSignup']").val("");
    $("input[name='dateSignup']").val("");
    $("input[name='telSignup']").val("");
    $("input[name='emailSignup']").val("");
    $("input[name='passeSignup']").val("");
}


//-----------------------------------------------COURS-----------------------------------------------\\

function showCour(e) {
    $("#viewUserModal").fadeIn(200);

    var id = $(e.target).attr("value");

    $.ajax({
        type: "GET",
        url: apiRoot + "/cours/" + id,
        headers: {
            "debug-data": true,
            "hash": localStorage.getItem('hash')
        },
        success: function(oRep) {
            console.log("Sucess: GET /cours/id");
            $("#viewUserModal > div > div > p:nth-child(1)").html(oRep.cour[0].titre);
            $("#viewUserModal > div > div > p:nth-child(2)").html("Domaine : " + oRep.cour[0].domaine);
            $("#viewUserModal > div > div > p:nth-child(3)").html("Langue : " + oRep.cour[0].langue);
            $("#viewUserModal > div > div > p:nth-child(4)").html("Cout : " + oRep.cour[0].cout);
            $("#viewUserModal > div > div > p:nth-child(5)").html("Description : " + oRep.cour[0].descriptions);

        },
        error: function(error) {
            console.log("Erreur: GET /cours/id");
            sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
        },
        dataType: "json"
    });
}

//-----------------------------------------------OTHERS-----------------------------------------------\\

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function alertDefault(page) {
    if (page == "signin")
        $("#viewSignIn").fadeIn();
    else if (page == "signup") {
        $("#viewSignUp").fadeIn();
    } else if ("signout") {
        sendAlert("Success", "vous avez été déconnecté", "success", function() {
            window.location.href = 'controleur.php?action=Logout';
        });
    }
}

function showUser(e) {
    $("#viewUserModal").fadeIn(200);

    var id = $(e.target).attr("value");

    $.ajax({
        type: "GET",
        url: apiRoot + "/users/" + id,
        headers: { "debug-data": true, "hash": localStorage.getItem('hash') },
        success: function(oRep) {
            console.log("Sucess: GET /users/id");
            $("#viewUserModal > div > div > p:nth-child(1)").html(oRep.user.nom);
            $("#viewUserModal > div > div > p:nth-child(2)").html("Prenom : " + oRep.user.prenom);
            $("#viewUserModal > div > div > p:nth-child(3)").html("Date de Naissance : " + oRep.user.data_naissance);
            $("#viewUserModal > div > div > p:nth-child(4)").html("E-mail : " + oRep.user.email);
            $("#viewUserModal > div > div > p:nth-child(5)").html("");
        },
        error: function(error) {
            console.log("Erreur: GET /users/id");
            sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
        },
        dataType: "json"
    });
}

function showConfirmation(callBackFunction) {
    $("#confirmationModal").fadeIn(200);
    $("#confirmationModal > div > input").off('click');
    $("#confirmationModal > div > input").click(callBackFunction);
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function getDayByWeekDay(dateNow, day) {
    return new Date(dateNow.getTime() + (day * msParJour));
}

function getFirstDayOfWeek(dateNow, weekNumber) {
    var premierJourWeek = new Date(dateNow.getTime() - (dateNow.getDay() * msParJour) + weekNumber * 7 * msParJour);
    return new Date(premierJourWeek.getFullYear(), premierJourWeek.getMonth(), premierJourWeek.getDate(), 0, 0, 0, 0);
}

function getLastDayOfWeek(premierJourWeek) {
    return new Date(premierJourWeek.getTime() - 1 + 7 * msParJour);
}