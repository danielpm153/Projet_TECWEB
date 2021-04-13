<?php
// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=apprendreModal");
	die("");
}
?>

<div id="viewApprendreModal" class="backGroundGrayCenterContent">
	<div class="form" id="formSelectionApprendre">
		<div style="width: 100%;">
			<p class="titleForm">Sign Up</p>
		</div>

		<div>
			<p class="titre">Titre:</p>
			<p class="professour">Professour:</p>
			<p class="cout">Cout:</p>
			<p class="domaine">Domaine:</p>
			<p class="langue">Langue:</p>
			<p class="description">Description:</p>
		</div>
		<div value="0" class="prevNext">
			<p><b>&lt</b></p>
			<p><b>&gt</b></p>
		</div>
		<div class="dateInterval">
			<p></p>
			<p></p>
		</div>

		<?php
		include("views/defaults/gridModalApprendre.php");
		?>

		<input type="button" value="Confirmer" onclick=" confirmerDemand();" />
	</div>
</div>