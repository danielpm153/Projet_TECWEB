function initEnseigner() {
    $.ajax({
        type: "GET",
        url: apiRoot + "/domaines",
        headers: { "debug-data": true, "hash": localStorage.getItem('hash') },
        success: function(oRep) {
            console.log("Sucess: GET /domaines");
            for (var i in oRep.domaines) {
                $("select[name='domaine']").append($("<option value='" + oRep.domaines[i].id_domaine + "'>").html(oRep.domaines[i].nom));
            }
            $("select[name='domaine']").append($("<option value='0'>").html("Others"));
        },
        error: function(error) {
            console.log("Erreur: GET /domaines");
            sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
        },
        dataType: "json"
    });

    $.ajax({
        type: "GET",
        url: apiRoot + "/langues",
        headers: { "debug-data": true, "hash": localStorage.getItem('hash') },
        success: function(oRep) {
            console.log("Sucess: GET /langues");
            for (var i in oRep.langues) {
                $("select[name='langue']").append($("<option value='" + oRep.langues[i].id_langue + "'>").html(oRep.langues[i].nom));
            }
            $("select[name='langue']").append($("<option value='0'>").html("Others"));
        },
        error: function(error) {
            console.log("Erreur: GET /langues");
            sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
        },
        dataType: "json"
    });
}

function getHoraire(time) {
    return time + 7;
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

    $("td.elementCellGreen").each(function(index) {
        var semaine = $(this).index();
        var horaire = getHoraire($(this).parent().index());

        horaires.push({ "semaine": "" + (semaine - 1), "horaire": "" + horaire + ":00:00" });
    });

    if (idDomaine == -1 || idLangue == -1 || horaires.length == 0) {
        sendAlert("Attention", "Tous les champs doivent être remplis.", "alert");
        return;
    }

    $.ajax({
        type: "POST",
        url: apiRoot + "/cours",
        headers: { "debug-data": true, "hash": localStorage.getItem('hash') },
        data: {
            "titre": titre,
            "id_domaine": idDomaine,
            "descriptions": description,
            "cout": cout,
            "id_langue": idLangue,
            "nomDomaine": otherDomaine,
            "nomLangue": otherLangue
        },
        success: function(oRep) {
            console.log("Sucess: POST /cours");
            var id_cour = oRep.cour[0].id_cour;

            $.ajax({
                type: "POST",
                url: apiRoot + "/coursDisponiblesList",
                headers: { "debug-data": true, "hash": localStorage.getItem('hash') },
                data: {
                    "horairesList": {
                        "id_cour": id_cour,
                        "horaires": horaires
                    }
                },
                success: function(oRep) {
                    console.log("Sucess: POST /coursDisponiblesList");
                    sendAlert("Success", "Enregistrement réussi", "success", function() {
                        location.reload();
                    });
                },
                error: function(error) {
                    console.log("Erreur: POST /coursDisponiblesList");
                    sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
                },
                dataType: "json"
            });

        },
        error: function(error) {
            console.log("Erreur: POST /cours");
            sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
        },
        dataType: "json"
    });

}