var coursDisponiblesList = [];

function getListTableApprendre(hash) {
    $.ajax({
        type: "GET",
        url: apiRoot + "/coursDisponiblesList",
        headers: { "hash": hash, "debug-data": true },
        success: function(oRep) {
            console.log("sucess GET /coursDisponiblesList")
                // console.log(oRep);
            coursDisponiblesList = oRep.coursDisponibles;
            oRep.coursDisponibles.forEach((element, index) => {
                // console.log(element);
                var nomProf = element.nomProf.toUpperCase();
                var prenomProf = element.prenomProf;
                prenomProf = prenomProf.charAt(0).toUpperCase() + prenomProf.slice(1);
                $('#tableApprendre').append("<tr><td onclick=' openApprendreModal(" + index + ");'>" + element.titre + "</td><td>" + prenomProf + " " + nomProf + "</td><td>" + element.cout + "</td></tr>");


            });

        },
        error: function(error) {
            console.log("error GET /coursDisponiblesList");
        },
        dataType: "json"
    });
}

var matrixHoraires = [];

function openApprendreModal(index) {
    // console.log(coursDisponiblesList[index]);
    // console.log(index);

    var cour = coursDisponiblesList[index];

    var nomProf = cour.nomProf.toUpperCase();
    var prenomProf = cour.prenomProf;
    prenomProf = prenomProf.charAt(0).toUpperCase() + prenomProf.slice(1);

    $("#viewApprendreModal").fadeIn();
    var area = $("#viewApprendreModal > div");
    area.find(".titre").html("Titre: " + cour.titre);
    area.find(".professour").html("Professour: " + prenomProf + " " + nomProf);
    area.find(".cout").html("Cout: " + cour.cout);
    area.find(".domaine").html("Domaine: " + cour.nomDomaine);
    area.find(" .langue").html("Langue: " + cour.nomLangue);
    area.find(".description").html("Description: " + cour.descriptions);

    var semaineIndisponible = [1, 0, 1, 0, 1, 0, 0];
    var horariosOcupados = [
        [8, 2],
        [13, 2],
        [10, 6]
    ];
    var lines = $(".tableModalApprendre  > tbody").children("tr:not(:first-child)");
    lines.each(line => {
        var cols = $(lines[line]).children("td:not(:first-child)");
        var row = [];
        cols.each(col => {
            // console.log("[" + line + "][" + col + "]");
            row.push($(cols[col]));
            if (semaineIndisponible[col] == 1) {
                $(cols[col]).addClass("posteIndisponible");
            }
        });
        matrixHoraires.push(row);
    });

    console.log(horariosOcupados);
    horariosOcupados.forEach((element, index) => {
        matrixHoraires[element[0] - 8][element[1] - 1].addClass("posteOccupe");
    });
    // horariosOcupados.each(index => {
    //     console.log(index);
    //     // 

    // });

}

var horaireChoisi = [];

function toggleGridModalApprendre(event) {
    if ($(event.target).is("td:not(:first-child):not(.posteIndisponible):not(.posteOccupe)")) {
        var sem = $(event.target).index();
        var hor = $(event.target).parent().index();
        if (horaireChoisi.length != 0) {
            if (hor + 7 === horaireChoisi[0] && sem === horaireChoisi[1]) {
                matrixHoraires[horaireChoisi[0] - 8][horaireChoisi[1] - 1].removeClass("posteChoisi");
                horaireChoisi = [];
            } else {
                matrixHoraires[horaireChoisi[0] - 8][horaireChoisi[1] - 1].removeClass("posteChoisi");
                horaireChoisi = [];
                matrixHoraires[hor - 1][sem - 1].addClass("posteChoisi");
                horaireChoisi.push(hor + 7);
                horaireChoisi.push(sem);
            }

        } else {
            matrixHoraires[hor - 1][sem - 1].addClass("posteChoisi");
            horaireChoisi.push(hor + 7);
            horaireChoisi.push(sem);
        }
        console.log(horaireChoisi);

    }
}



// data: {
//     id_cours: {
//         titre: ""
//         descr: ""
//         HorairesList: [{
//                 semaine: "",
//                 horaire: ""
//             },
//             {
//                 semaine: "",
//                 horaire: ""
//             }
//         ]
//     },
//     id_cours: {
//         titre: ""
//         descr: ""
//         HorairesList: [{
//                 semaine: "",
//                 horaire: ""
//             },
//             {
//                 semaine: "",
//                 horaire: ""
//             }
//         ]
//     }
// }