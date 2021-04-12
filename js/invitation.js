var array = [{
    "id_coursHoraire": "1",
    "titre": "Titulo 1",
    "eleve": "Eleve 1",
    "date": "dia 1",
    "horaire": "hor 1",
    "status": "Pendente"
}, {
    "id_coursHoraire": "3",
    "titre": "Titulo 2",
    "eleve": "Eleve 2",
    "date": "dia 1",
    "horaire": "hor 1",
    "status": "Marcado"
}, {
    "id_coursHoraire": "9",
    "titre": "Titulo 3",
    "eleve": "Eleve 3",
    "date": "dia 4",
    "horaire": "hor 4",
    "status": "Pendente"
}];

function acceptInvitation(index) {
    console.log(index);



    $('#' + index).remove();
}

function declineInvitation() {

}

function getListTableInvitation(hash) {

    array.forEach((element, index) => {
        var htmlString = "";

        htmlString += "<tr id='" + index + "' onclick=''><td>" + element.titre + "</td><td>" +
            element.eleve + "</td><td>" + element.date + "</td><td>" + element.horaire + "</td><td>" +
            element.status + "</td><td>";

        if (element.status == "Pendente") {
            htmlString += "<input type='button' value='C' onclick='acceptInvitation(" + index + ")' />"
        }

        htmlString += "<input type='button' value='X' onclick='' />" +
            "</td></tr>"

        $('#tableInvitations').append(htmlString);
    });


}