function initInvitation() {
    $.ajax({
        type: "GET",
        url: apiRoot + "/getReservationsByIdEnseigner",
        headers: { "debug-data": true, "hash": localStorage.getItem('hash') },
        success: function(oRep) {
            console.log("Sucess: GET /getReservationsByIdEnseigner");
            console.log(oRep);
            for (var i in oRep.reservations) {
                var line = "<td value='" + oRep.reservations[i].id_cour + "' onclick='showCour(event)'>" + oRep.reservations[i].titre + "</td>";
                line += "<td value='" + oRep.reservations[i].id_userEleve + "' onclick='showUser(event)'>" +
                    oRep.reservations[i].nom + ", " + oRep.reservations[i].prenom + "</td>";

                line += "<td>" + oRep.reservations[i].date + "</td>";
                line += "<td>" + oRep.reservations[i].horaire + "</td>";
                line += "<td>" + oRep.reservations[i].status + "</td>";
                line += "<td class='imgFormActions'>";

                if (oRep.reservations[i].id_status === '1') {
                    line += "<img src='resources/ok.png' name='2' value='" + oRep.reservations[i].id_reservation + "' onclick='updateStatusReservation(event)'/>";
                }
                line += "<img src='resources/close.png' name='3' value='" + oRep.reservations[i].id_reservation + "' onclick='updateStatusReservation(event)'/></td>";

                $("#tableInvitations").append($("<tr>").clone(true).html(line));
            }
        },
        error: function(error) {
            console.log("Erreur: GET /getReservationsByIdEnseigner");
            sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
        },
        dataType: "json"
    });

    $.ajax({
        type: "GET",
        url: apiRoot + "/coursByIdEnseigner",
        headers: { "debug-data": true, "hash": localStorage.getItem('hash') },
        success: function(oRep) {
            console.log("Sucess: GET /coursByIdEnseigner");
            // console.log(oRep.cour);
            for (var i in oRep.cour) {
                var line = "<td value='" + oRep.cour[i].id_cour + "' onclick='showCour(event)'>" + oRep.cour[i].titre + "</td>";
                line += "<td class='imgFormActions'>";
                if (oRep.cour[i].id_status === "5") {
                    line += "<img src='resources/close.png' name='3' value='" + oRep.cour[i].id_cour + "' onclick='desactiveActiveCour(event)'/></td>";
                } else if (oRep.cour[i].id_status === "6") {
                    line += "<img src='resources/ok.png' name='3' value='" + oRep.cour[i].id_cour + "' onclick='desactiveActiveCour(event)'/></td>";
                }


                $("#tableCours").append($("<tr>").clone(true).html(line));
            }
        },
        error: function(error) {
            console.log("Erreur: GET /cours/");
            sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
        },
        dataType: "json"
    });
}

function desactiveActiveCour(e) {
    var id_cour = $(e.target).attr("value");
    var imgSrc = $(e.target).attr("src");
    var id_status = 0;
    if (imgSrc === "resources/close.png") {
        id_status = 6;
    } else if (imgSrc === "resources/ok.png") {
        id_status = 5;
    }

    showConfirmation(function() {
        $.ajax({
            type: "POST",
            url: apiRoot + "/changeStatusCours",
            headers: { "debug-data": true, "hash": localStorage.getItem('hash') },
            data: {
                "id_cour": id_cour,
                "id_status": id_status
            },
            success: function(oRep) {
                console.log("Sucess: POST /changeStatusCours");
                location.reload();
            },
            error: function(xhr, status, error) {
                console.log("Erreur: POST /changeStatusCours");
                sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
            },
            dataType: "json"
        });
    });
}

function updateStatusReservation(e) {
    var id_reservation = $(e.target).attr("value");
    var status_reservation = $(e.target).attr("name");

    showConfirmation(function() {
        $.ajax({
            type: "POST",
            url: apiRoot + "/setReservationAction",
            headers: { "debug-data": true, "hash": localStorage.getItem('hash') },
            data: { "reservationAction": status_reservation, "id_reservation": id_reservation },
            success: function(oRep) {
                console.log("Sucess: POST /setReservationAction");
                location.reload();
            },
            error: function(xhr, status, error) {
                console.log("Erreur: POST /setReservationAction");
                sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
            },
            dataType: "json"
        });
    });
}