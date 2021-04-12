<?php

// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=apprendreModal");
	die("");
}

?>

<div id="viewApprendreModal" class="backGroundGrayCenterContent">
	<div style="min-height: 70%; min-width: 45%;" class="form">
		<p class="titleForm">Sign In</p>
		<p class="closeForm"><b>X</b></p>

		<div>
			<p class="titre">Titre:</p>
			<p class="professour">Professour:</p>
			<p class="cout">Cout:</p>
			<p class="domaine">Domaine:</p>
			<p class="langue">Langue:</p>
			<p class="description">Description:</p>
		</div>

		<?php
		include("views/defaults/gridModalApprendre.php");
		?>

		<input type="button" value="Confirmer" onclick="" />
	</div>
</div>