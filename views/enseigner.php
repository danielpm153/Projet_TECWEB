<?php

if (basename($_SERVER["PHP_SELF"]) != "index.php") {
    header("Location:../index.php?view=enseigner");
    die("");
}

?>
<div class="contenuEnseigner">
    <div class="formBackGround">
        <div class="background-box-shadown"></div>
        <div class="form" style="width: 37vw; padding-right: 10px;">
            <div>

                <p>Title*</p>
                <input type="text" name="titre" maxlength="100" />

                <p>Coût (€)*</p>
                <input type="number" max="1000" min="1" name="cout" />

                <p>Domaine*</p>
                <select name="domaine" onchange="checkSelection(event, 'otherDomaine')">
                    <option selected=true value="-1" disabled>Select your Domaine</option>
                </select>

                <p>Langue*</p>
                <select name="langue" onchange="checkSelection(event, 'otherLangue')">
                    <option selected=true value="-1" disabled>Select your language</option>
                </select>

            </div>
            <div>

                <p>Description*</p>
                <textarea name="description" maxlength="250"></textarea>

                </br>

                <input type="text" placeholder="Nom Domaine" style="opacity: 0;  visibility: hidden; position: absolute" name="otherDomaine" maxlength="50" />

                <br/>
                
                <input type="text" placeholder="Nom Langue" style="opacity: 0;  visibility: hidden; position: absolute" name="otherLangue" maxlength="25" />

                <br/>

            </div>
            <input type="button" value="Envoyer" onclick="envoyerInformationsCour()" />
        </div>
    </div>

    <?php
    include("views/defaults/gridDateTime.php");
    ?>
    
</div>

<script>
    $(document).ready(init);

    function init() {
        $.ajax({
            type: "GET",
            url: apiRoot + "/domaines",
            headers: {
                "debug-data": true,
                "hash": "146c32116728241fcbae3f6305711970"
            },
            success: function(oRep) {
                for (var i in oRep.domaines) {
                    $("select[name='domaine']").append($("<option value='" + oRep.domaines[i].id_domaine + "'>").html(oRep.domaines[i].nom));
                }

                $("select[name='domaine']").append($("<option value='0'>").html("Others"));

            },
            error: function(error) {
                sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
                console.log("Error: @@@ " + error);
            },
            dataType: "json"
        });

        $.ajax({
            type: "GET",
            url: apiRoot + "/langues",
            headers: {
                "debug-data": true,
                "hash": "146c32116728241fcbae3f6305711970"
            },
            success: function(oRep) {
                for (var i in oRep.langues) {
                    $("select[name='langue']").append($("<option value='" + oRep.langues[i].id_langue + "'>").html(oRep.langues[i].nom));
                }

                $("select[name='langue']").append($("<option value='0'>").html("Others"));
            },
            error: function(error) {
                sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
            },
            dataType: "json"
        });
    }

    function getHoraire(time) {
        return time + 7;
    }
</script> 