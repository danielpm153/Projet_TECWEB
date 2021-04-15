<?php
// Si la page est appelée directement par son adresse, on redirige en passant pas la page index
if (basename($_SERVER["PHP_SELF"]) != "index.php") {
	header("Location:../index.php?view=apprendreModal");
	die("");
}
?>

<div id="viewUserModal" class="backGroundGrayCenterContent">
	<div class="form">
		<div>
			<p class="titleForm">User</p>
			<p>Prenom : </p>
			<p>Date de Naissance : </p>
			<p>E-mail : </p>
			<p></p>
		</div>
	</div>
</div>