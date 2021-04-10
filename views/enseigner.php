<?php

if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=enseigner");
	die("");
}

?>
<div class="formBackGround">
    <div class="background-box-shadown"></div>
    <div class="form">
        <p>Domaine*</p>
        <select name="domaine" onchange="checkSelection(event)">
            <option selected=true value="-1" disabled>Select your Domaine</option>
        </select>
        <p style="display: none; margin-top: -5px;"></p>
        <input type="text" placeholder="Nom Domaine" style="display: none;" name="otherDomaine" maxlength="50"/>

        </br> </br>

        <p>Title*</p>
        <input type="text" name="titre" maxlength="100"/>

        </br> </br>

        <p>Coût (€)*</p>
        <input type="number" max="1000" min="1" name="cout"/>

        </br> </br>
        
        <p>Langue*</p>
        <select name="langue" onchange="checkSelection(event)">
            <option selected=true value="-1" disabled>Select your language</option>
        </select>
        <p style="display: none; margin-top: -5px;"></p>
        <input type="text" style="display: none;" name="otherLangue" maxlength="25"/>
        
        <br/><br/>

        <p>Description*</p>
        <textarea name="description" maxlength="250"></textarea>

        </br> </br>

        <input type="button" value="Envoyer" onclick="envoyerInformationsCour()"/>
    </div>
</div>


<?php 
    include("views/defaults/gridTime.php");
?>

<script>

    $( document ).ready(init);

    function init() {
        $.ajax({
            type: "GET",
            url: apiRoot + "/domaines",
            headers: { "debug-data": true , "hash" : "146c32116728241fcbae3f6305711970"},
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
            headers: { "debug-data": true , "hash" : "146c32116728241fcbae3f6305711970"},
            success: function(oRep) {
                for (var i in oRep.langues) {
                    $("select[name='langue']").append($("<option value='" + oRep.langues[i].id_langue + "'>").html(oRep.langues[i].nom));
                }
                
                $("select[name='langue']").append($("<option value='0'>").html("Others"));
            },
            error: function(error) {
                sendAlert("Failed", "Le site n'a pas pu accéder au serveur", "failed");
                console.log("Error: @@@ " + error);
            },
            dataType: "json"
        });
    }

    function getHoraire(time) {
        return time + 7;
    }
    

</script>