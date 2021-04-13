<?php
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
    header("Location:../index.php?view=enseigner");
    die("");
}
?>

<div class="contenuEnseigner">
    <div class="headerPage">
		<h2>Enseigner</h2>
		<p>Sur cet écran, vous pouvez voir la création de nouvelles leçons que vous allez enseigner.</p>
	</div>
    <div class="formBackGround" style="width: 44%; max-width: 670px;">
        <div class="background-box-shadown"></div>
        <div class="form" style="width: 90%; max-width: 700px;">
            <div style="width: 100%;">
                <p class="titleForm">Cadastrar novo processo</p>
            </div>
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
                <input type="text" placeholder="Nom Domaine" style="opacity: 0;  visibility: hidden; position: absolute; width: calc(100% - 28px)" name="otherDomaine" maxlength="50" />
                <br />
                <input type="text" placeholder="Nom Langue" style="opacity: 0;  visibility: hidden; position: absolute; width: calc(100% - 28px)" name="otherLangue" maxlength="25" />
                <br />

            </div>
            <input type="button" value="Envoyer" onclick="envoyerInformationsCour()" />
        </div>
    </div>

    <?php
    include("views/defaults/gridDateTime.php");
    ?>

</div>

<script>
    $(document).ready(initEnseigner);
</script>