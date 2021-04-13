<?php
// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=signup");
	die("");
}
?>

<div id="confirmationModal" class="backGroundGrayCenterContent">
	<div class="form">
		<div>
			<p class="titleForm">Atencion</p>
			
			<p>Vous êtes sûr ?</p>
			<p style="font-size: 14px;">(cliquez en dehors de la modale pour annuler)</p>

		</div>
		
		<input type="button" value="Oui"/>
	</div>
</div>