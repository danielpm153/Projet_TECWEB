function getListTableRecords() {
    $.ajax({
        type: "GET",
        url: apiRoot + "/reservationsRecordsByIdUser",
        headers: { "hash": localStorage.getItem('hash'), "debug-data": true },
        success: function(oRep) {
            console.log("Sucess: /GET /reservationsRecordsByIdUser");
            reservationsList = oRep.reservations;
            reservationsList.forEach((element, index) => {
                $('#tableRecords').append(
                    "<tr>" +
                    "<td>" + element.titre + "</td>" +
                    "<td>" + element.prenomProf + " " + element.nomProf + "</td>" +
                    "<td>" + element.prenomEleve + " " + element.nomEleve + "</td>" +
                    "<td>" + element.date + "</td>" +
                    "<td>" + element.horaire + "</td>" +
                    "<td>" + element.nomLangue + "</td>" +
                    "<td>" + element.cout + "</td>" +
                    "<td>" + element.status + "</td>" +
                    "</tr>"
                );
            });
        },
        error: function(error) {
            console.log("Erreur: /GET /reservationsRecordsByIdUser");
        },
        dataType: "json"
    });
}