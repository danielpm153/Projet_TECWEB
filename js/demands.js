function getListTableDemands() {
    $.ajax({
        type: "GET",
        url: apiRoot + "/getReservationsByIdEleve",
        headers: { "debug-data": true, "hash": localStorage.getItem('hash') },
        success: function(oRep) {
            console.log("Sucess: GET /getReservationsByIdEleve");
            console.log(oRep);

            reservations = oRep.reservations;
            reservations.forEach((element, index) => {
                var nomProf = element.nomProf.toUpperCase();
                var prenomProf = element.prenomProf;
                prenomProf = prenomProf.charAt(0).toUpperCase() + prenomProf.slice(1);
                $('#tableDemands').append(
                    "<tr>" +
                    "<td value='" + element.id_cour + "' onclick=showCour(event)>" + element.titre + "</td>" +
                    "<td>" + prenomProf + " " + nomProf + "</td>" +
                    "<td>" + element.date + "</td>" +
                    "<td>" + element.horaire + "</td>" +
                    "<td>" + element.status + "</td>" +
                    "<td class=imgFormActions>" +
                    "<img src='resources/close.png' name='3' value='" + element.id_reservation + "' onclick='updateStatusReservation(event)'/>" +
                    "</td>" +
                    "</tr>"
                );
            });

        },
        error: function(error) {
            console.log("Erreur: GET /getReservationsByIdEleve");
            sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
        },
        dataType: "json"
    });
}