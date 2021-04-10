var apiRoot = "http://localhost/cours-prive-api/api";

var hash = "hash";

function login() {
    var email = document.getElementById("ta_email").value;
    var passe = document.getElementById("ta_passe").value;
    console.log(email, passe)
    $.ajax({
        type: "POST",
        url: apiRoot + "/authenticate",
        headers: { "debug-data": true },
        data: { "email": email, "passe": passe },
        success: function(oRep) {
            console.log(oRep);
            hash = oRep.hash;
            window.location.href = "controleur.php?action=Connexion&hash=" + hash;

        },
        error: function(error) {
            console.log("Error: @@@ " + error);
            window.location.href = "controleur.php?action=Connexion&message=Error";
        },
        dataType: "json"
    });
}

function signUp() {
    window.location.href = "controleur.php?action=SignUp"
}

function inscrireUser() {
    var nom = $("#ta_nom").val();
    var prenom = $("#ta_prenom").val();
    var dateNaissance = $("#ta_dateNaissance").val();
    var telephone = $("#ta_telephone").val();
    var email = $("#ta_email").val();
    var passe = $("#ta_passe").val();

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var testEmail = regexEmail.test(String(email).toLowerCase());

    const regexPasse = /(?=^.{6,}$).*$/;
    var testePasse = regexPasse.test(String(passe));

    const regexNom = /^[a-z ]+$/;
    var testeNom = regexNom.test(String(nom));
    var testePrenom = regexNom.test(String(prenom));


    if (testEmail & testePasse & testeNom & testePrenom) {
        $.ajax({
            type: "POST",
            url: apiRoot + "/users",
            data: { "email": email, "passe": passe, "nom": nom, "prenom": prenom, "dateNaissance": dateNaissance, "telephone": telephone },
            success: function(oRep) {
                console.log(oRep);
            },
            error: function(xhr, status, error) {
                var err = JSON.parse(xhr.responseText);
                console.log(err.msg);
            },
            dataType: "json"
        });
    } else {
        console.log("Erro Regex");
    }

}

function envoyerInformationsCour() {
    var idDomaine = $("select[name='domaine']").val();
    var otherDomaine = (idDomaine != 0) ? null : $("input[name='otherDomaine']").val();
    var titre = $("input[name='titre']").val();
    var description = $("textarea[name='description']").val();
    var cout = $("input[name='cout']").val();
    var idLangue = $("select[name='langue']").val();
    var otherLangue = (idLangue != 0) ? null : $("input[name='otherLangue']").val();

    var horaires = [];

    $("div.elementWithX").each(function( index ) {
        var semaine = $(this).index();
        var horaire = getHoraire($(this).parent().index());

        horaires.push({"semaine" : "" + semaine, "horaire" : "" + horaire + ":00:00"});
    });

    if (idDomaine == -1 ||  idLangue == -1 || horaires.length == 0) {
        sendAlert("Attention", "Tous les champs doivent être remplis.", "alert");
        return;
    }
    
    $.ajax({
        type: "POST",
        url: apiRoot + "/cours",
        headers: { "debug-data": true , "hash" : "146c32116728241fcbae3f6305711970"},
        data: {
            "titre" : titre,
            "id_domaine" : idDomaine,
            "descriptions" : description,
            "cout" : cout,
            "id_langue" : idLangue,
            "nomDomaine" : otherDomaine,
            "nomLangue" : otherLangue
        },
        success: function(oRep) {

            var id_cour = oRep.cour[0].id_cour;

            $.ajax({
                type: "POST",
                url: apiRoot + "/coursHorairesList",
                headers: { "debug-data": true , "hash" : "146c32116728241fcbae3f6305711970"},
                data: {
                    "horairesList" : {
                        "id_cour" : id_cour,
                        "horaires" : horaires
                    }
                },
                success: function(oRep) {
                    sendAlert("Success", "Enregistrement réussi", "success");
                    $("div.elementWithX").css("background-color", "white");
                    $("div.elementWithX").removeClass("elementWithX");
                    $("input[type='text']").val("");
                    $("input[type='number']").val("");
                    $("select").val("-1");
                },
                error: function(error) {
                    sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
                    console.log("Error: @@@ " + error);
                },
                dataType: "json"
            });

        },
        error: function(error) {
            sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
            console.log("Error: @@@ " + error);
        },
        dataType: "json"
    });

}

