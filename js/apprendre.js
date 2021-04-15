var coursDisponibles = [];
var horaireChoisi = null;
var matrixHoraires = [];

function getListTableApprendre() {
    $.ajax({
        type: "GET",
        url: apiRoot + "/coursDisponiblesList",
        headers: { "hash": localStorage.getItem('hash'), "debug-data": true },
        success: function(oRep) {
            console.log("Sucess: GET /coursDisponiblesList");
            coursDisponibles = oRep.coursDisponibles;
            coursDisponibles.forEach((element, index) => {
                var nomProf = element.nomProf.toUpperCase();
                var prenomProf = element.prenomProf;
                prenomProf = prenomProf.charAt(0).toUpperCase() + prenomProf.slice(1);
                $('#tableApprendre').append(
                    "<tr>" +
                    "<td onclick=' openApprendreModal(" + index + ");'>" + element.titre + "</td>" +
                    "<td>" + prenomProf + " " + nomProf + "</td>" +
                    "<td>" + element.cout + "</td>" +
                    "</tr>"
                );
            });
        },
        error: function(error) {
            console.log("Erreur: GET /coursDisponiblesList");
        },
        dataType: "json"
    });
}

function openApprendreModal(index) {
    horaireChoisi = null;

    var cour = coursDisponibles[index];

    var nomProf = cour.nomProf.toUpperCase();
    var prenomProf = cour.prenomProf;
    prenomProf = prenomProf.charAt(0).toUpperCase() + prenomProf.slice(1);

    $("#viewApprendreModal").fadeIn();
    var area = $("#viewApprendreModal > div");
    area.find(".titre").html(cour.titre);
    area.find(".professour").html("<span>Professour:</span> " + prenomProf + " " + nomProf);
    area.find(".cout").html("<span>Cout:</span> " + cour.cout);
    area.find(".domaine").html("<span>Domaine:</span> " + cour.nomDomaine);
    area.find(" .langue").html("<span>Langue:</span> " + cour.nomLangue);
    area.find(".description").html("<span>Description:</span> " + cour.descriptions);

    area.find(".prevNext").attr("value", 0);

    area.find(".prevNext > p:nth-child(1)").attr("onclick", "gridDirection(" + index + ",'left');");
    area.find(".prevNext > p:nth-child(2)").attr("onclick", "gridDirection(" + index + ",'right');");

    area.find("input[value='Confirmer']").attr("onclick", "confirmerDemand(" + index + ");");

    remplirGrid(index, 0);
}

function getListHorairesDisponibles(cour, week) {
    var horairesDisponibles = [];
    var dateNow = new Date();
    var horaireString = null;
    var disponible = null;

    cour.horairesList.forEach(el => {
        horaireString = el.horaire[0] + el.horaire[1];
        disponible = {
            "horaire": parseInt(horaireString),
            "semaine": parseInt(el.semaine),
            "id_disponibilite": el.id_disponibilite
        };
        if (week === 0) {
            if (dateNow.getDay() < el.semaine || (dateNow.getDay() === el.semaine && dateNow.getTime() <= el.horaire)) {
                if (!horairesDisponibles.includes(disponible)) {
                    horairesDisponibles.push(disponible);
                }
            }
        } else {
            if (!horairesDisponibles.includes(disponible)) {
                horairesDisponibles.push(disponible);
            }
        }
    });
    return horairesDisponibles;
}

function getListHorairesOcupe(cour, week) {
    var dateNow = new Date();
    var dateCours = null;
    var premierJourWeek = getFirstDayOfWeek(dateNow, week);
    var lastJourWeek = getLastDayOfWeek(premierJourWeek);
    var horaireString = null;
    var horairesOcupe = []

    cour.horairesOcupes.forEach(el => {
        dateCours = new Date(el.date);
        if (dateCours >= premierJourWeek && dateCours <= lastJourWeek) {
            horaireString = el.horaire[0] + el.horaire[1];
            horairesOcupe.push({ "horaire": parseInt(horaireString), "semaine": parseInt(el.semaine) })
        }
    });
    return horairesOcupe;
}

function remplirGrid(index, week) {
    cleanGrid();
    matrixHoraires = [];

    var cour = coursDisponibles[index];
    var horairesDisponibles = getListHorairesDisponibles(cour, week);
    var horairesOcupe = getListHorairesOcupe(cour, week);

    var firstWeekJour = getFirstDayOfWeek(new Date(), week)
    var lastWeekJour = getLastDayOfWeek(firstWeekJour);

    $(".dateInterval > p:nth-child(1)").html(formatDate(firstWeekJour));
    $(".dateInterval > p:nth-child(2)").html(formatDate(lastWeekJour));

    var trs = $(".tableModalApprendre  > tbody").children("tr:not(:first-child)");
    trs.each(tr => {
        var tds = $(trs[tr]).children("td:not(:first-child)");
        var row = [];
        tds.each(td => {
            $(tds[td]).addClass("posteIndisponible");
            row.push({ "element": $(tds[td]), "value": null });
        });
        matrixHoraires.push(row);
    });

    horairesDisponibles.forEach(disponibilite => {
        matrixHoraires[disponibilite.horaire - 8][disponibilite.semaine].element.removeClass("posteIndisponible");
        matrixHoraires[disponibilite.horaire - 8][disponibilite.semaine].value = disponibilite;
    });

    horairesOcupe.forEach(ocupe => {
        matrixHoraires[ocupe.horaire - 8][ocupe.semaine].element.addClass("posteOccupe");
    });
}

function toggleGridModalApprendre(event) {
    if ($(event.target).is("td:not(:first-child):not(.posteIndisponible):not(.posteOccupe)")) {
        var semaine = $(event.target).index() - 1;
        var horaire = $(event.target).parent().index();

        var cellNew = matrixHoraires[horaire - 1][semaine];
        var contenu = { "horaire": horaire + 7, "semaine": semaine };

        if (horaireChoisi != null) {
            var cellExists = matrixHoraires[horaireChoisi.horaire - 8][horaireChoisi.semaine];
            cellExists.element.removeClass("posteChoisi");
            if (horaire + 7 === horaireChoisi.horaire && semaine === horaireChoisi.semaine) {
                horaireChoisi = null;
            } else {
                horaireChoisi = null;
                cellNew.element.addClass("posteChoisi");
                horaireChoisi = contenu;
            }
        } else {
            cellNew.element.addClass("posteChoisi");
            horaireChoisi = contenu;
        }
        console.log(horaireChoisi);
    }
}

function cleanGrid() {
    matrixHoraires.forEach(tr => {
        tr.forEach(td => {
            td.element.removeClass();
        });
    });
}

function gridDirection(index, direction) {
    var week = parseInt($(".prevNext").attr("value"));

    if (direction === "left") {
        week -= 1;
    } else if (direction === "right") {
        week += 1;
    }
    $(".prevNext").attr("value", week);
    remplirGrid(index, week);
}

function confirmerDemand(index) {
    if (horaireChoisi != null) {
        var week = parseInt($(".prevNext").attr("value"));
        var firstWeekJour = getFirstDayOfWeek(new Date(), week);
        var horaireSelecione = horaireChoisi.horaire + ":00:00";
        var semaineSelecione = horaireChoisi.semaine;
        var dateSelecione = formatDate(getDayByWeekDay(firstWeekJour, semaineSelecione));
        var cell = matrixHoraires[horaireChoisi.horaire - 8][horaireChoisi.semaine];
        var disponibilite = cell.value;

        $.ajax({
            type: "POST",
            url: apiRoot + "/reservations",
            headers: { "hash": localStorage.getItem('hash'), "debug-data": true },
            data: { "id_disponibilite": disponibilite.id_disponibilite, "date": dateSelecione },
            success: function(oRep) {
                console.log("Sucess: POST /reservations");
                coursDisponibles[index].horairesOcupes.push({ "id_disponibilite": disponibilite.id_disponibilite, "semaine": semaineSelecione, "horaire": horaireSelecione, "date": dateSelecione });
                //remplirGrid(index, week);
                $(".backGroundGrayCenterContent").fadeOut();
                sendAlert("Success", "Enregistrement réussi", "success", function() {
                    $("#confirmationModal").fadeOut(200);
                });
            },
            error: function(error) {
                console.log("Erreur: POST /reservations");
            },
            dataType: "json"
        });
    } else {
        console.log("Aucun champ sélectionné!");
    }
}