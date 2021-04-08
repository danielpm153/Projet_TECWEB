<form id="formCourse">

    <?php 
        include("views/defaults/gridTime.php");
    ?>

    <p><b>Domaine :</b></p>
    <select name="domaine" onclick="checkSelection(event)">
        <option value="1">Math</option>
        <option value="2">MMC</option>
        <option value="3">Arts</option>
        <option value="4">Langue</option>
        <option value="0">Others</option>
    </select>
    <input type="text" placeholder="Nom Domaine" style="visibility: hidden;" name="otherDomaine" maxlength="50"/>

    </br> </br>

    <p><b>Title :</b></p>
    <input type="text" placeholder="Titre" name="titre" maxlength="100"/>

    </br> </br>

    <p><b>Description</b></p>
    <textarea name="description" maxlength="250" placeholder="Donnez une Description de Votre Projet"></textarea>

    </br> </br>

    <p><b>Coût (€):</b></p>
    <input type="number" max="1000" min="1" placeholder="Coût de chaque cours" name="cout"/>

    </br> </br>
    
    <p><b>Langue :</b></p>
    <select name="langue" onclick="checkSelection(event)">
        <option value="1">French</option>
        <option value="2">English</option>
        <option value="0">Others</option>
    </select>
    <input type="text" placeholder="Langue" style="visibility: hidden;" name="otherLangue" maxlength="25"/>
    <br/><br/>
    <input type="button" value="Envoyer" onclick="envoyerInformations()"/>
</form>